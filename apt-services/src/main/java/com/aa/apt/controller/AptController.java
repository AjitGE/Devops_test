package com.aa.apt.controller;

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
import org.springframework.web.client.RestTemplate;

import com.aa.apt.acs.response.AcsPromotionContentResponse;
import com.aa.apt.ar5.response.HeaderElement;
import com.aa.apt.ar5.response.LSCSReplicantElement;
import com.aa.apt.ar5.response.ListContentElement;
import com.aa.apt.ar5.response.ListElement;
import com.aa.apt.ar5.response.LscsPromotionContentResponse;
import com.aa.apt.ar5.response.ParagraphElement;
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
	public Promotion getPromo(@PathVariable("pcode") String pcode)
	{
		logger.info(pcode);
		String pcodepromocurrval[] = pcode.split(":");
		logger.info("Promotion code entered:" + pcodepromocurrval[0]);
		logger.info("Current Promotion only:" + pcodepromocurrval[1]);

		// ArrayList<Promotion> p = new ArrayList<Promotion>();
		Promotion prom = new Promotion();
		RestTemplate restTemplate = new RestTemplate();

		LscsPromotionContentResponse ar5response = restTemplate.getForObject(
				ar5PromoUrlStart + pcodepromocurrval[0] + ar5PromoUrlEnd,
				LscsPromotionContentResponse.class);
		prom.setPromotionName(ar5response.getContent().getPromotionName());
		

		
		
		prom.setAacomview(getAAcomview(ar5response.getContent().getMainContent()));
		
		prom.setTermsandconditions(getTermsAndConditions(ar5response.getContent().getTermsAndConditions()));
		
		
		
		AcsPromotionContentResponse acsresponse = restTemplate.getForObject(
				acsPromoUrlStart + pcodepromocurrval[0] + acsPromoUrlEnd,
				AcsPromotionContentResponse.class);
		prom.setPromotionOrChallengeCode(acsresponse.getContent().getPromotionOrChallengeCode());
		prom.setIsTrending(acsresponse.getContent().getIsTrending());
		prom.setKeyword(acsresponse.getContent().getKeyword());

		return prom;
		        		
	        
	}
	//http://localhost:8080/api/search/P468B:false
	
	
	
	
	
	
	
	
	
	public String getAAcomview(List<LSCSReplicantElement> lscsReplicantElement)
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
        		ar5maincontentbuffer.append("<h3>").append(headerElement.getValue()).append("</h3>");
        	   
        		
        	 }else if(elementType.equals("List")){
        		 ListContentElement listContentElement = (ListContentElement)element;
        	     List<ListElement> listElements = listContentElement.getListElements();
        	     Iterator<ListElement> listElementsItr = listElements.iterator();
	        	     while(listElementsItr.hasNext()){
	        	    	 ListElement listElement = listElementsItr.next();
	        	    	 elementType = listElement.getParentChild();
	        	    	 ar5maincontentbuffer.append("<li>").append(listElement.getValue()).append("</li>");
	        	    	 
	        	     }
	        	     
        	    
        	 }else if(elementType.equals("Paragraph")){
        		 ParagraphElement paragraphElement = (ParagraphElement)element;
        		
        		 ar5maincontentbuffer.append("<p>").append(paragraphElement.getParagraph()).append("</p>");        	    
        	 }
        	 
        }
        
		return ar5maincontentbuffer.toString();
	}
	
	public String getTermsAndConditions(List<LSCSReplicantElement> lscsReplicantElementForTermsList)
	{
		StringBuffer ar5termsandconditionsbuffer = new StringBuffer();
		String elementType = "";
    	Iterator<LSCSReplicantElement> lscsReplicantElementTermsItr = lscsReplicantElementForTermsList.iterator();
        while(lscsReplicantElementTermsItr.hasNext()){
        	LSCSReplicantElement elementTerm = lscsReplicantElementTermsItr.next();
        	elementType = elementTerm.getElementType();
        	ListContentElement listContentElementForTerm = (ListContentElement)elementTerm;
   	        List<ListElement> listElementsForTerm = listContentElementForTerm.getTermsAndConditionsListElements();
       	     Iterator<ListElement> listElementsItrForTerm = listElementsForTerm.iterator();
    	     while(listElementsItrForTerm.hasNext()){
    	    	 ListElement listElement = listElementsItrForTerm.next();
    	    	 elementType = listElement.getParentChild();
    	    	 ar5termsandconditionsbuffer = ar5termsandconditionsbuffer.append("<li>").append(listElement.getValue()).append("</li>");
    	     }
    	     
        }
        return ar5termsandconditionsbuffer.toString();
	}
	
	
}

