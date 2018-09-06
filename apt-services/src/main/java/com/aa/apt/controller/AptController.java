package com.aa.apt.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

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
	

	String BASIC_AUTH_TOKEN;
	String PROMO_REQ_TEMPLATE;
	String MOCK_VENTANA_TEMPLATE;  //Remove this line.  Used only for Mock service call
	
    @Value("${loyalty.membersecurity.url}")
    String apiUrl;
    
    @Value("${loyalty.membersecurity.mock.url}")
    String apiMockUrl;
    
    @Value("${loyalty.membersecurity.username}")
    String apiUsername;
    
    @Value("${loyalty.membersecurity.password}")
    String apiPassword;
    
	
	@RequestMapping(ControllerConstants.PINGTEST)
	public String home()
	{
		return "From SpringBoot";
	}
	
	
	//http://localhost:8080/api/search/P468B:false	
	@RequestMapping(value=ControllerConstants.PCODESEARCH, method=RequestMethod.GET)
	public List<Promotion> getPromo(@PathVariable("pcode") String pcode) throws IOException
	{
		
		List<String> promoCodeList = getPromosFromVentana(pcode);
		
		
		List<Promotion> promoList = new ArrayList<>();
		Promotion prom;
		RestTemplate restTemplate = new RestTemplate();
		
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
				prom.setDirectmailer("From ACS Template");
				prom.setMarketingpageurl("From ACS Template");
				prom.setEmailurl("From ACS Template");
			} catch (HttpClientErrorException hcee) {
				logger.info("Promo code " + promoCodeList.get(i) + " not found in ACS - Got " + hcee.getStatusCode()
						+ "Not found error");
			}

			promoList.add(prom);

		}

		promoList.forEach(p -> logger.info(p.getPromotionOrChallengeCode()));
		return promoList;
	        
	}
	
	
		public List<String> getPromosFromVentana(String pcode) 
		{
			List<String> promoCodeList = new ArrayList<>();
			
			logger.info(pcode);
			String pcodepromocurrval[] = pcode.split(":");
			logger.info("Promotion code entered:" + pcodepromocurrval[0]);
			String currpromoflag = pcodepromocurrval[1];

		if (pcodepromocurrval[0].length() == 5) {
			promoCodeList.add(pcodepromocurrval[0]);
		} else if (pcodepromocurrval[0].toUpperCase().startsWith("R")) { // Remove this IF block once Ventana call is
																			// placed
			promoCodeList.add("RVGLD");
			promoCodeList.add("RDLEP");
			promoCodeList.add("RHVGL");
			promoCodeList.add("RHVEP");
			promoCodeList.add("EHI02");
			promoCodeList.add("RHVPP");
			promoCodeList.add("P468B");

		} else {
			promoCodeList.add(pcodepromocurrval[0]);
		}
			
			
			//START WORKING HERE ONCE VENTANA SERVICE IS READY
			/*
			
			PROMO_REQ_TEMPLATE = FileUtils.getResourceToString("rest-requests/LoyaltyMasterPromotionService_RequestTemplate.json");
			BASIC_AUTH_TOKEN = NetworkUtils.generateBasicAuthToken(apiUsername, apiPassword);
			HttpHeaders requestHeaders = new HttpHeaders();
	        requestHeaders.set("Accept", MediaType.APPLICATION_JSON_VALUE);
	        requestHeaders.add("Content-Type", "application/json");
	        requestHeaders.set("X-Client-ID", "1");
			    
	        NetworkUtils.addBasicAuth(requestHeaders, BASIC_AUTH_TOKEN);
		        
		    
	        String requestBody = buildPromoRequestBody(pcode,currpromoflag);

	        HttpEntity<String> request = new HttpEntity<String>(requestBody, requestHeaders);

	        RestTemplate restTemplate = new RestTemplate();
	        //ResponseEntity<String> response = restTemplate.postForEntity(apiUrl, request, String.class);
	        ResponseEntity<String> response = restTemplate
	                .exchange(apiUrl, HttpMethod.POST, request, String.class);
	        String responseJson = response.getBody();

	        System.out.println("---------ResponseJson--------"+responseJson);
	        
	        */

	        return promoCodeList;


		}
		
		private String buildPromoRequestBody(String pcode,String currpromoflag) {
	        return PROMO_REQ_TEMPLATE
	                .replace("REPLACESERVICEVERSION", "1")
	                .replace("REPLACECLIENTID", "2")
	                .replace("REPLACEAUDITID", "AptUsername")
	                .replace("REPLACECLIENTTRANSACTIONID","22")
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
        		// elementType =  headerElement.getElementType();
        		ar5maincontentbuffer.append("<h6>").append(headerElement.getValue()).append("</h6>");
        	   
        		
        	 }else if(elementType.equals("List")){
        		 ListContentElement listContentElement = (ListContentElement)element;
        	     List<ListElement> listElements = listContentElement.getListElements();
        	     Iterator<ListElement> listElementsItr = listElements.iterator();
        	     ar5maincontentbuffer.append("<ul>");
	        	     while(listElementsItr.hasNext()){
	        	    	 ListElement listElement = listElementsItr.next();
	        	    	 // elementType = listElement.getParentChild();
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
	
	
	//Delete block  Only for Mock Ventana test service ---START
	
	private String buildRequestBody(String aadvantageNumber) {
		return MOCK_VENTANA_TEMPLATE.replace("REPLACEAANUMBER", aadvantageNumber);
	}	
	
	//http://localhost:8080/api/search/ventana/714JWV6
	@RequestMapping(value=ControllerConstants.AANUMBERSEARCH, method=RequestMethod.GET)
	public String testMockVentana(@PathVariable("aanumber") String aanumber) throws IOException
	{
		
		
		
		MOCK_VENTANA_TEMPLATE = FileUtils.getResourceToString("rest-requests/VentanaMockREST.json");
		BASIC_AUTH_TOKEN = NetworkUtils.generateBasicAuthToken(apiUsername, apiPassword);
		HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.set("Accept", MediaType.APPLICATION_JSON_VALUE);
        requestHeaders.add("Content-Type", "application/json");
        requestHeaders.set("X-Client-ID", "1");
        requestHeaders.set("X-Transaction-ID", "2");
        requestHeaders.add("SOAPAction", "GetPromos");
        NetworkUtils.addBasicAuth(requestHeaders, BASIC_AUTH_TOKEN);

        String requestBody = buildRequestBody(aanumber);

        HttpEntity<String> request = new HttpEntity<String>(requestBody, requestHeaders);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(apiMockUrl, HttpMethod.POST, request, String.class);
        String responseJson = response.getBody();

        logger.info("---------ResponseJson--------"+responseJson);
        
        


        return "Mock Ventana REST service - Success \n"+ responseJson;




	}
	
	//Delete block  Only for Mock Ventana test service ---END

}

