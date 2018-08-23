package com.aa.apt.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.aa.apt.ar5.response.LscsPromotionContentResponse;
import com.aa.apt.acs.response.AcsPromotionContentResponse;
import com.aa.apt.constants.LSCSConstants;
import com.aa.apt.model.Promotion;

@RestController
@RequestMapping("/api/")
public class AptController 
{
	
	@RequestMapping("hello")
	public String home()
	{
		return "From SpringBoot";
	}
	
	
		
	@RequestMapping(value="search/{pcode}", method=RequestMethod.GET)
	public Promotion getPromo(@PathVariable("pcode") String pcode)
	{
		System.out.println(pcode);
		String pcodepromocurrval[] = pcode.split(":");
		System.out.println("Promotion code entered:" + pcodepromocurrval[0]);
		System.out.println("Current Promotion only:" + pcodepromocurrval[1]);

		// ArrayList<Promotion> p = new ArrayList<Promotion>();
		Promotion prom = new Promotion();
		RestTemplate restTemplate = new RestTemplate();

		LscsPromotionContentResponse ar5response = restTemplate.getForObject(
				LSCSConstants.AR5_PROMO_DETAILS_START + pcodepromocurrval[0] + LSCSConstants.AR5_PROMO_DETAILS_END,
				LscsPromotionContentResponse.class);
		System.out.println(ar5response.getContent().getMainContent());
		prom.setPromotionName(ar5response.getContent().getPromotionName());

		AcsPromotionContentResponse acsresponse = restTemplate.getForObject(
				LSCSConstants.ACS_PROMO_DETAILS_START + pcodepromocurrval[0] + LSCSConstants.ACS_PROMO_DETAILS_END,
				AcsPromotionContentResponse.class);
		System.out.println(acsresponse.getContent().getKeyword());
		prom.setPromotionOrChallengeCode(acsresponse.getContent().getPromotionOrChallengeCode());
		prom.setIsTrending(acsresponse.getContent().getIsTrending());
		prom.setKeyword(acsresponse.getContent().getKeyword());

		return prom;
		        		
	        
	}
	//http://localhost:8080/api/search/P468B:false
}

