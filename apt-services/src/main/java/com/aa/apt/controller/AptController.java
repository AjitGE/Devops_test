package com.aa.apt.controller;

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
import com.aa.apt.ar5.response.LscsPromotionContentResponse;
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

		AcsPromotionContentResponse acsresponse = restTemplate.getForObject(
				acsPromoUrlStart + pcodepromocurrval[0] + acsPromoUrlEnd,
				AcsPromotionContentResponse.class);
		prom.setPromotionOrChallengeCode(acsresponse.getContent().getPromotionOrChallengeCode());
		prom.setIsTrending(acsresponse.getContent().getIsTrending());
		prom.setKeyword(acsresponse.getContent().getKeyword());

		return prom;
		        		
	        
	}
	//http://localhost:8080/api/search/P468B:false
}

