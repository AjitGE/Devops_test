package com.aa.apt.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.aa.apt.acs.response.AcsPromotionContentResponse;
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
	
	@RequestMapping(ControllerConstants.PINGTEST)
	public String home()
	{
		return "From SpringBoot";
	}
	
	
		
	@RequestMapping(value=ControllerConstants.PCODESEARCH, method=RequestMethod.GET)
	public List<Promotion> getPromo(@PathVariable("pcode") String pcode)
	{
		
		logger.info(pcode);
		String pcodepromocurrval[] = pcode.split(":");
		logger.info("Promotion code entered:" + pcodepromocurrval[0]);
		logger.info("Current Promotion only:" + pcodepromocurrval[1]);

		List<Promotion> promoList = new ArrayList<Promotion>();

		RestTemplate restTemplate = new RestTemplate();
		Promotion prom;
		List<String> promoCodeList = new ArrayList<String>();

		if (pcodepromocurrval[0].toUpperCase().startsWith("R")) {    //Remove this IF block once Ventana call is placed
			promoCodeList.add("RVGLD");
			promoCodeList.add("RDLEP");
			// promoCodeList.add("RHVGL");
			// promoCodeList.add("RHVEP");
			// promoCodeList.add("RHVPP");
			// promoCodeList.add("P468B");
			// promoCodeList.add("EHI02");
		} else
			promoCodeList.add(pcodepromocurrval[0]);

		for (int i = 0; i < promoCodeList.size(); i++) {

			prom = new Promotion();

			// Populate Ventana fields here -- Replace with Another REST call response
			prom.setPromoStartDate("From Ventana");
			prom.setPromoEndDate("From Ventana");
			prom.setTac("From Ventana");

			// For Details View
			prom.setMemRegStartDate("From Ventana");
			prom.setMemRegEndDate("From Ventana");
			prom.setMemTravelStartDate("From Ventana");
			prom.setMemTravelEndDate("From Ventana");
			prom.setLateRegEndDate("From Ventana");

			LscsPromotionContentResponse ar5response = restTemplate.getForObject(
					ar5PromoUrlStart + promoCodeList.get(i) + ar5PromoUrlEnd, LscsPromotionContentResponse.class);
			prom.setPromotionName(ar5response.getContent().getPromotionName());

			prom.setAacomview(getLSCSContent(ar5response.getContent().getMainContent()));

			prom.setTermsandconditions(getLSCSContent(ar5response.getContent().getTermsAndConditions()));

			try {
				AcsPromotionContentResponse acsresponse = restTemplate.getForObject(
						acsPromoUrlStart + promoCodeList.get(i) + acsPromoUrlEnd, AcsPromotionContentResponse.class);

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
			} catch (HttpClientErrorException hcee) {
				logger.info("Promo code " + promoCodeList.get(i) + " not found in ACS - Got " + hcee.getStatusCode()
						+ "Not found error");
			}

			promoList.add(prom);

		}

		promoList.forEach(p -> System.out.println(p.getPromotionOrChallengeCode()));
		return promoList;
	        
	}
	//http://localhost:8080/api/search/P468B:false
	
	
	
	
	
	
	
	
	
	public String getLSCSContent(List<LSCSReplicantElement> lscsReplicantElement)
	{
		
		StringBuffer ar5maincontentbuffer = new StringBuffer();
		String elementType = "";
		Iterator<LSCSReplicantElement> lscsReplicantElementItr = lscsReplicantElement.iterator();
        while(lscsReplicantElementItr.hasNext()){
        	LSCSReplicantElement element = lscsReplicantElementItr.next();
        	elementType = element.getElementType();
        	if(elementType.equals("Heading")){
        	
        		HeaderElement headerElement = (HeaderElement)element;
        		elementType =  headerElement.getElementType();
        		ar5maincontentbuffer.append("<h6>").append(headerElement.getValue()).append("</h6>");
        	   
        		
        	 }else if(elementType.equals("List")){
        		 ListContentElement listContentElement = (ListContentElement)element;
        	     List<ListElement> listElements = listContentElement.getListElements();
        	     Iterator<ListElement> listElementsItr = listElements.iterator();
        	     ar5maincontentbuffer.append("<ul>");
	        	     while(listElementsItr.hasNext()){
	        	    	 ListElement listElement = listElementsItr.next();
	        	    	 elementType = listElement.getParentChild();
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
        
		return ar5maincontentbuffer.toString();
	}
	

	
	
}

