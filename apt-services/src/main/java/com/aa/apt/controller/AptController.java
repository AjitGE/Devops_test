package com.aa.apt.controller;

import java.io.IOException;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
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
import com.aa.apt.constants.ControllerConstants;
import com.aa.apt.model.Promotion;
import com.aa.apt.utils.FileUtils;
import com.aa.apt.utils.NetworkUtils;
import com.aa.apt.ventana.response.PromoSearchResponse;
import com.aa.apt.ventana.response.PromoSearchResult;
import com.aa.apt.ventana.response.PromoSearchResultItem;
import com.aa.apt.ventana.response.ResponseStatus;
import com.aa.apt.ventana.response.VentanaResponse;


@RestController
@CrossOrigin
@RequestMapping(ControllerConstants.ROOT_API)
public class AptController 
{
	private static final Logger logger = LoggerFactory.getLogger(AptController.class);
	
	
	@Value("${acs.promo.url.start}")
    String acsPromoUrlStart;
	
	@Value("${acs.promo.url.end}")
    String acsPromoUrlEnd;
	
	@Value("${ar5.promo.url.start}")
    String ar5PromoUrlStart;
	
	@Value("${ar5.promo.url.end}")
    String ar5PromoUrlEnd;	
	
    @Value("${loyalty.membersecurity.url}")
    String apiUrl;
        
    @Value("${loyalty.membersecurity.username}")
    String apiUsername;
    
    @Value("${loyalty.membersecurity.password}")
    String apiPassword;
    
    Map<String, Promotion> promoListMap;
	
	@RequestMapping(ControllerConstants.PINGSPRINGBOOT)
	public String home()
	{
		return "From SpringBoot";
	}
	
	
	//http://localhost:8080/api/search/P468B:false	
	@RequestMapping(value=ControllerConstants.PCODESEARCH, method=RequestMethod.GET)
	public List<Promotion> getPromo(@PathVariable("pcode") String pcode) throws IOException
	{
		
		Instant buildPromoSearchStart = Instant.now();
		
		promoListMap = new HashMap<>();
		getPromosFromVentana(pcode);
		

		List<String> promoCodeList = new ArrayList<>(promoListMap.keySet().stream().collect(Collectors.toList()));
		if (promoCodeList.isEmpty()) {
			// Call LSCS and perform PST code search
		}
		
		createPromoListForVentanaResults(promoCodeList);
		
				
		Instant buildPromoSearchEnd = Instant.now();
		long buildPromoSearchTimeElapsed = Duration.between(buildPromoSearchStart,buildPromoSearchEnd).toMillis();
		if(logger.isDebugEnabled())
			logger.debug("Time elapsed to build list of promo(s) for given code {} : {} (in Millis)",pcode,buildPromoSearchTimeElapsed);
		
		return promoListMap.values().stream().collect(Collectors.toList());
		
	        
	}
	
	/**
	 * Get List of Promotions from a Single or Partial Promo/TA code
	 * @param pcode  (PromoCode:CurrentPromotionsOnlyFlag)
	 * @throws IOException
	 */
	
	public void getPromosFromVentana(String pcode) throws IOException {
		
		Instant buildVentanaResponseStart = Instant.now();

		String[] pcodepromocurrval = pcode.split(":");
		
		HttpHeaders requestHeaders = createVentanaPromoHeader();// Promo request header set for Ventana

        String requestBody = buildPartialPromoRequestBody(ControllerConstants.VEN_PROMOSEARCH_JSON_REQ,pcodepromocurrval[0],pcodepromocurrval[1]);

        HttpEntity<String> request = new HttpEntity<>(requestBody, requestHeaders);

        RestTemplate restTemplate = new RestTemplate();


        Instant consumeVentanPartialPromoSearchStart = Instant.now();
		ResponseEntity<VentanaResponse> response = restTemplate.exchange(apiUrl, HttpMethod.POST, request,
				VentanaResponse.class);

		Instant consumeVentanPartialPromoSearchEnd = Instant.now();
		long consumeVentanaPartialPromoSearchTimeElapsed = Duration.between(consumeVentanPartialPromoSearchStart,consumeVentanPartialPromoSearchEnd).toMillis();
		if(logger.isDebugEnabled())
			logger.debug("Time elapsed to consume Ventana partial Promo code search service for given code {} : {} (in Millis)",pcodepromocurrval[0],consumeVentanaPartialPromoSearchTimeElapsed);

		Instant parseVentanPartialPromoSearchStart = Instant.now();
		VentanaResponse ventanaResponse = response.getBody();
		PromoSearchResponse promoSearchResponse = ventanaResponse.getPromoSearchResponse();
		ResponseStatus responseStatus = promoSearchResponse.getResponseStatus();

		if (responseStatus.getMessage().equals("Successful Execution")) {

			PromoSearchResult promoSearchResult = promoSearchResponse.getPromoSearchResult();
			List<PromoSearchResultItem> promoSearchResultItemList = promoSearchResult.getPromoSearchResultItem();
			Iterator<PromoSearchResultItem> promoSearchResultItemItr = promoSearchResultItemList.iterator();
			createPromotionMap(promoSearchResultItemItr);

		}
		else if (responseStatus.getMessage().equals("No Promotions Found")) {
			logger.info("No Promotions found in Ventana for Promo code search : {}", pcodepromocurrval[0] );
		}
		
		Instant parseVentanPartialPromoSearchEnd = Instant.now();
		long parseVentanaPartialPromoSearchTimeElapsed = Duration.between(parseVentanPartialPromoSearchStart,parseVentanPartialPromoSearchEnd).toMillis();
		if(logger.isDebugEnabled())
			logger.debug("Time elapsed to parse Ventana partial Promo code search service for given code {} : {} (in Millis)",pcodepromocurrval[0],parseVentanaPartialPromoSearchTimeElapsed);
		
		Instant buildVentanaResponseEnd = Instant.now();
		long buildVentanaResponseTimeElapsed = Duration.between(buildVentanaResponseStart,buildVentanaResponseEnd).toMillis();
		if(logger.isDebugEnabled())
			logger.debug("Time elapsed to build ventana response for given code {} : {} (in Millis)",pcode,buildVentanaResponseTimeElapsed);
		

	}
	
	
	/**
	 * 
	 *Create promotion details and put it inside the promotion map
	 * @param promoSearchResultItemItr
	 */
		private void createPromotionMap(Iterator<PromoSearchResultItem> promoSearchResultItemItr) {
			while (promoSearchResultItemItr.hasNext()) {
				Promotion singlePromo = new Promotion();
				PromoSearchResultItem promoSearchResultItem = promoSearchResultItemItr.next();			
				singlePromo.setPromoStartDate(promoSearchResultItem.getPromoStartDate());
				singlePromo.setPromoEndDate(promoSearchResultItem.getPromoEndDate());
				singlePromo.setMemRegStartDate(promoSearchResultItem.getRegistrationStartDate());
				singlePromo.setMemRegEndDate(promoSearchResultItem.getAACOMRegistrationEndDate());
				singlePromo.setMemTravelStartDate(promoSearchResultItem.getActivityStartDate());
				singlePromo.setMemTravelEndDate(promoSearchResultItem.getActivityEndDate());
				singlePromo.setLateRegEndDate(promoSearchResultItem.getRegistrationEndDate());
				singlePromo.setVentanaPromoName(promoSearchResultItem.getPromoName());
				singlePromo.setVentanaPromoDesc(promoSearchResultItem.getDescription());
				singlePromo.setVentanaPromoType(promoSearchResultItem.getPromoType());
				singlePromo.setActiveornot(promoSearchResultItem.getActive());
				 if(promoSearchResultItem.getTAC() != null) {
					singlePromo.setTac(promoSearchResultItem.getTAC().getCode());
				 } else {
					 singlePromo.setTac("N/A");
				 }

				promoListMap.put(promoSearchResultItem.getPromoCode(), singlePromo);			
			}
		}
		
	
	
	
	/**
	 * Create Promotions object and map to List of promotions
	 * @param promoCodeList
	 */
		private void createPromoListForVentanaResults(List<String> promoCodeList) {
			RestTemplate restTemplate = new RestTemplate();
			for (int i = 0; i < promoCodeList.size(); i++) {
				Promotion prom = promoListMap.get(promoCodeList.get(i));
				Instant buildSinglePromoStart = Instant.now();
				Instant ar5ResponseStart = Instant.now();
				LscsPromotionContentResponse ar5response = restTemplate.getForObject(
						ar5PromoUrlStart + promoCodeList.get(i) + ar5PromoUrlEnd, LscsPromotionContentResponse.class);
				Instant ar5ResponseEnd = Instant.now();
				long ar5ResponseTimeElapsed = Duration.between(ar5ResponseStart, ar5ResponseEnd).toMillis();
				if (logger.isDebugEnabled()) {
				    logger.debug("Time elapsed to get AR5 response for promo code {} :{} (in Millis)" , promoCodeList.get(i),ar5ResponseTimeElapsed);
				}			
				Instant ar5ParseResponseStart = Instant.now();
				prom.setPromotionName(ar5response.getContent().getPromotionName());
				prom.setAacomview(getLSCSContent(ar5response.getContent().getMainContent()));
				prom.setTermsandconditions(getLSCSContent(ar5response.getContent().getTermsAndConditions()));
				Instant ar5ParseResponseEnd = Instant.now();
				long ar5ParseResTimeElapsed = Duration.between(ar5ParseResponseStart, ar5ParseResponseEnd).toMillis();
				if (logger.isDebugEnabled()) {
				    logger.debug("Time elapsed to parse AR5 response for promo code {} :{} (in Millis)" , promoCodeList.get(i),ar5ParseResTimeElapsed);
				}

				try {
					Instant acsResponseStart = Instant.now();
					AcsPromotionContentResponse acsresponse = restTemplate.getForObject(
							acsPromoUrlStart + promoCodeList.get(i) + acsPromoUrlEnd, AcsPromotionContentResponse.class);
					Instant acsResponseEnd = Instant.now();
					long acsResTimeElapsed = Duration.between(acsResponseStart, acsResponseEnd).toMillis();
					if(logger.isDebugEnabled())
						logger.debug("Time elapsed to get ACS response for promo code {} : {} (in Millis)",promoCodeList.get(i),acsResTimeElapsed);				
					Instant acsParseResStart = Instant.now();
					prom.setPromotionOrChallengeCode(acsresponse.getContent().getPromotionOrChallengeCode());
					prom.setIsTrending(acsresponse.getContent().getIsTrending());
					prom.setKeyword(acsresponse.getContent().getKeyword());
					prom.setRegistrationRequired(acsresponse.getContent().getIsRegistrationRequire());
					prom.setTargetedPromotion(acsresponse.getContent().getIsTargetedPromotion());
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
						logger.debug("Time elapsed to parse ACS response for promo code {} : {} (in Millis)",promoCodeList.get(i),acsParseResTimeElapsed);
				} catch (HttpClientErrorException hcee) {
					logger.error("Promo code " + promoCodeList.get(i) + " not found in ACS - Got " + hcee.getStatusCode()
							+ " Not found error");
				}

				Instant buildSinglePromoEnd = Instant.now();
				long buildSinglePromoTimeElapsed = Duration.between(buildSinglePromoStart,buildSinglePromoEnd).toMillis();
				if(logger.isDebugEnabled())
					logger.debug("Time elapsed to build promo code {} : {} (in Millis)",promoCodeList.get(i),buildSinglePromoTimeElapsed);
				promoListMap.put(promoCodeList.get(i), prom);

			}
		}
		

		/**
		 * Create header object for promotion request
		 * @return HttpHeaders
		 */
			private HttpHeaders createVentanaPromoHeader() {
				
				String basicAuthToken = NetworkUtils.generateBasicAuthToken(apiUsername, apiPassword);
				HttpHeaders requestHeaders = new HttpHeaders();
		        requestHeaders.set("Accept", MediaType.APPLICATION_JSON_VALUE);
		        requestHeaders.add("Content-Type", "application/json");
		        requestHeaders.set("X-Client-ID", "ARP4-APT");
		        requestHeaders.set("X-Transaction-ID", "APTTEST");
		        requestHeaders.set("Date", "09122018");
		        NetworkUtils.addBasicAuth(requestHeaders, basicAuthToken);
				return requestHeaders;
			}
			
			/**
			 * Read JSON Request file and replace required elements
			 * @param json request file path, promoCode, currentPromotionsOnlyFlag 
			 * @return String
			 */
			private String buildPartialPromoRequestBody(String jsonfile, String pcode,String currpromoflag) throws IOException {
				String promoSearchReqTemplate = FileUtils.getResourceToString("rest-requests/" + jsonfile);
		        return promoSearchReqTemplate
		        		.replace("REPLACESERVICENAME", "LoyaltyMasterPromotionSearch")
		                .replace("REPLACESERVICEVERSION", "1.0")
		                .replace("REPLACECLIENTID", "ARP4-AACO")
		                .replace("REPLACEAUDITID", "AA806677")
		                .replace("REPLACECLIENTTRANSACTIONID","1234-1234")
		                .replace("REPLACEPROMOCODE",pcode)
		                .replace("REPLACESTARTDATE", "")
		                .replace("REPLACEENDDATE","")
		                .replaceAll("REPLACEACTIVEFLAG", currpromoflag.equals("true")?"Y":"N")
		                ;
		    }
	
	
	
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
	
	// http://localhost:8080/api/search/ar5/P468B
	@RequestMapping(value = ControllerConstants.PCODESEARCHFORAR5, method = RequestMethod.GET)
	public LscsPromotionContentResponse getPromoDetailsFromAR5(@PathVariable("pcode") String pcode) {
		RestTemplate restTemplate = new RestTemplate();
		logger.info("AR5 URL trying to access: {}", ar5PromoUrlStart + pcode + ar5PromoUrlEnd);
		LscsPromotionContentResponse ar5response = restTemplate.getForObject(ar5PromoUrlStart + pcode + ar5PromoUrlEnd,
				LscsPromotionContentResponse.class);
		logger.debug("--------------Ping AR5-----{}",ar5response.getContent());
		
		return ar5response;
	}

	// http://localhost:8080/api/search/acs/RVGLD
	@RequestMapping(value = ControllerConstants.PCODESEARCHFORACS, method = RequestMethod.GET)
	public AcsPromotionContentResponse getPromoDetailsFromACS(@PathVariable("pcode") String pcode) {
		RestTemplate restTemplate = new RestTemplate();
		logger.info("ACS URL trying to access: {}", acsPromoUrlStart + pcode + acsPromoUrlEnd);
		AcsPromotionContentResponse acsresponse = restTemplate.getForObject(acsPromoUrlStart + pcode + acsPromoUrlEnd, AcsPromotionContentResponse.class);
		logger.debug("--------------Ping AR5-----{}",acsresponse.getContent());
		logger.info("Email content is : {}", getEmailContent(acsresponse.getContent().getCommunications().get(0).getEmail()));
		return acsresponse;
	}
	

}

