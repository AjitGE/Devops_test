package com.aa.apt.service;

import java.time.Duration;
import java.time.Instant;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.aa.apt.acs.response.AcsPromotionContentResponse;
import com.aa.apt.acs.response.Email;
import com.aa.apt.acs.response.MarketingPageUrl;
import com.aa.apt.ar5.response.HeaderElement;
import com.aa.apt.ar5.response.LSCSReplicantElement;
import com.aa.apt.ar5.response.ListContentElement;
import com.aa.apt.ar5.response.ListElement;
import com.aa.apt.ar5.response.LscsPromotionContentResponse;
import com.aa.apt.ar5.response.ParagraphElement;
import com.aa.apt.ar5.response.TermsAndConditionsUrl;
import com.aa.apt.ar5.response.UrlElement;
import com.aa.apt.model.Promotion;



@Service
public class AptService {
	private static final Logger logger = LoggerFactory.getLogger(AptService.class);
	
	
	@Autowired
    private RestTemplate restTemplate;
	
	@Value("${acs.promo.url.start}")
    String acsPromoUrlStart;
	
	@Value("${acs.promo.url.end}")
    String acsPromoUrlEnd;
	
	@Value("${ar5.promo.url.start}")
    String ar5PromoUrlStart;
	
	@Value("${ar5.promo.url.end}")
    String ar5PromoUrlEnd;
	
	@Bean
	public RestTemplate restTemplate() {
	        return new RestTemplate();
	}
	
	
	@Async("asyncExecutor")
    public CompletableFuture<LscsPromotionContentResponse> getAr5LscsPromotionContentResponse(Promotion prom) throws InterruptedException
    {
		try {
		logger.info("AR5 request starts");
		Instant buildSinglePromoStart = Instant.now();
		Instant ar5ResponseStart = Instant.now();
		/*LscsPromotionContentResponse ar5response = restTemplate.getForObject(
				ar5PromoUrlStart + promoCodeList.get(i) + ar5PromoUrlEnd, LscsPromotionContentResponse.class);*/
		LscsPromotionContentResponse ar5response = restTemplate.getForObject(
				ar5PromoUrlStart + prom.getPromotionOrChallengeCode() + ar5PromoUrlEnd, LscsPromotionContentResponse.class);
		
		Instant ar5ResponseEnd = Instant.now();
		long ar5ResponseTimeElapsed = Duration.between(ar5ResponseStart, ar5ResponseEnd).toMillis();
		if (logger.isDebugEnabled()) {
		    logger.debug("Time elapsed to get AR5 response for promo code {} :{} (in Millis)" , prom.getPromotionOrChallengeCode(),ar5ResponseTimeElapsed);
		}			
		Instant ar5ParseResponseStart = Instant.now();
		prom.setPromotionName(ar5response.getContent().getPromotionName());
		prom.setAacomview(getLSCSContent(ar5response.getContent().getMainContent()));
		prom.setTermsandconditions(getLSCSContent(ar5response.getContent().getTermsAndConditions()));
		Instant ar5ParseResponseEnd = Instant.now();
		long ar5ParseResTimeElapsed = Duration.between(ar5ParseResponseStart, ar5ParseResponseEnd).toMillis();
		if (logger.isDebugEnabled()) {
		    logger.debug("Time elapsed to parse AR5 response for promo code {} :{} (in Millis)" , prom.getPromotionOrChallengeCode(),ar5ParseResTimeElapsed);
		}
		
		 logger.info("AR5 response completed");
	        return CompletableFuture.completedFuture(ar5response);   
	        
		}catch (HttpClientErrorException hcee) {
			logger.error("Promo code " + prom.getPromotionOrChallengeCode() + " not found in LSCS - Got " + hcee.getStatusCode()
			+ " Not found error");
        }
		return null;
    }
	
	@Async("asyncExecutor")
    public CompletableFuture<AcsPromotionContentResponse> getAcsPromotionContentResponse(Promotion prom) throws InterruptedException
    {
		logger.info("ACS request starts");
		AcsPromotionContentResponse acsresponse= null;
		try {
			Instant acsResponseStart = Instant.now();
			acsresponse = restTemplate.getForObject(
					acsPromoUrlStart + prom.getPromotionOrChallengeCode() + acsPromoUrlEnd, AcsPromotionContentResponse.class);
			Instant acsResponseEnd = Instant.now();
			long acsResTimeElapsed = Duration.between(acsResponseStart, acsResponseEnd).toMillis();
			if(logger.isDebugEnabled())
				logger.debug("Time elapsed to get ACS response for promo code {} : {} (in Millis)",prom.getPromotionOrChallengeCode(),acsResTimeElapsed);				
			Instant acsParseResStart = Instant.now();
			prom.setPromotionOrChallengeCode(acsresponse.getContent().getPromotionOrChallengeCode());
			prom.setIsTrending(acsresponse.getContent().getIsTrending());
			prom.setKeyword(acsresponse.getContent().getKeywords());
			prom.setRegistrationRequired(acsresponse.getContent().getIsMemberRegistration());
			prom.setTargetedPromotion(acsresponse.getContent().getTargetedPromotion());
			prom.setHowToEarn(getLSCSContent(acsresponse.getContent().getHowToEarn()));
			prom.setFulfillment(getLSCSContent(acsresponse.getContent().getFulfillment()));
			prom.setResolveIssues(getLSCSContent(acsresponse.getContent().getResolveIssues()));
			prom.setPSTCodes("From ACS Template");
			prom.setPartnerCodes("From ACS Template");
			prom.setDirectmailer(acsresponse.getContent().getCommunications().get(0).getIsDirectMailer());
			prom.setMarketingpageurl(getMarketingPageUrl(acsresponse.getContent().getCommunications().get(0).getMarketingPageUrl()));
			prom.setEmailurl(getEmailContent(acsresponse.getContent().getCommunications().get(0).getEmail()));
			
			Instant acsParseResEnd = Instant.now();
			long acsParseResTimeElapsed = Duration.between(acsParseResStart, acsParseResEnd).toMillis();
			if(logger.isDebugEnabled())
				logger.debug("Time elapsed to parse ACS response for promo code {} : {} (in Millis)",prom.getPromotionOrChallengeCode(),acsParseResTimeElapsed);
		} catch (HttpClientErrorException hcee) {
			logger.error("Promo code " + prom.getPromotionOrChallengeCode() + " not found in ACS - Got " + hcee.getStatusCode()
					+ " Not found error");
		}
		 logger.info("ACS response completed");
	        return CompletableFuture.completedFuture(acsresponse);
    }
	
	/**
	 * this method will retrieve LSCS replicant element
	 * @param list of LSCS Replicant Element
	 * @return String value of LSCS Replicant element
	 */
	private String getLSCSContent(List<LSCSReplicantElement> lscsReplicantElement)
	{
		
		StringBuilder ar5maincontentbuffer = new StringBuilder();
		String elementType = "";
		Iterator<LSCSReplicantElement> lscsReplicantElementItr = lscsReplicantElement.iterator();
        while(lscsReplicantElementItr.hasNext()){
        	LSCSReplicantElement element = lscsReplicantElementItr.next();
        	elementType = element.getElementType();
        	if(elementType.equals("Heading")){
        	
        		HeaderElement headerElement = (HeaderElement)element;
        		ar5maincontentbuffer.append("<h6>").append(headerElement.getValue()).append("</h6>");
        	   
        		
        	 }else if(elementType.equals("List")){
        		 ListContentElement listContentElement = (ListContentElement)element;
        	     List<ListElement> listElements = listContentElement.getListElements();
        	     Iterator<ListElement> listElementsItr = listElements.iterator();
        	     ar5maincontentbuffer.append("<ul>");
	        	     while(listElementsItr.hasNext()){
	        	    	 ListElement listElement = listElementsItr.next();
	        	    	 ar5maincontentbuffer.append("<li>").append(listElement.getValue()).append("</li>");
	        	    	 
	        	     }
	        	     ar5maincontentbuffer.append("</ul>");
	        	     
        	    
        	 }else if(elementType.equals("Paragraph")){
        		 ParagraphElement paragraphElement = (ParagraphElement)element;
        		
        		 ar5maincontentbuffer.append("<p>").append(paragraphElement.getParagraph()).append("</p>");        	    
        	 }else if (elementType.equals("Url")) {
        		UrlElement mainContentUrl = (UrlElement) element;				
        		ar5maincontentbuffer.append("<a alt=\""+mainContentUrl.getAltText()+"\" href=\""+mainContentUrl.getUrl()+"\">"+mainContentUrl.getDisplayText()+"</a>");
        		ar5maincontentbuffer.append("<br>");
 			}
        	 else if (elementType.equals("TermsAndConditionUrl")) {
        		 TermsAndConditionsUrl mainContentUrl = (TermsAndConditionsUrl) element;				
         		ar5maincontentbuffer.append("<a alt=\""+mainContentUrl.getAltText()+"\" href=\""+mainContentUrl.getUrl()+"\">"+mainContentUrl.getTextDisplay()+"</a>");
         		ar5maincontentbuffer.append("<br>");
  			}
        	 
        }
        
		return (!ar5maincontentbuffer.toString().equals("") ) ? ar5maincontentbuffer.toString() : "N/A";
	}
	
	public String getEmailContent(List<Email> emailList) {
		StringBuilder emailURL = new StringBuilder();
		Iterator<Email> emailItr = emailList.iterator();
		while (emailItr.hasNext()) {
			Email email = emailItr.next();
			emailURL.append("<a href=\"" + email.getUrl() + "\">" + email.getTextDisplay() + "</a>");
			emailURL.append("<br>");

		}

		return (!emailURL.toString().equals("")) ? emailURL.toString() : "N/A";
	}

	public String getMarketingPageUrl(List<MarketingPageUrl> marketPageurlList) {
		StringBuilder marketPageUrl = new StringBuilder();
		Iterator<MarketingPageUrl> marketingPageUrlItr = marketPageurlList.iterator();
		while (marketingPageUrlItr.hasNext()) {
			MarketingPageUrl mpu = marketingPageUrlItr.next();
			marketPageUrl.append("<a href=\"" + mpu.getUrl() + "\">" + mpu.getTextDisplay() + "</a>");
			marketPageUrl.append("<br>");
		}
		return (!marketPageUrl.toString().equals("")) ? marketPageUrl.toString() : "N/A";
	}

}
