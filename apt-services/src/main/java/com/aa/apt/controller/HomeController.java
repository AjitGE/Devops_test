package com.aa.apt.aptservices.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.aa.apt.aptservices.model.Content;
import com.aa.apt.aptservices.model.PromoLSCSResponse;
import com.aa.apt.aptservices.model.Promotion;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/")
public class HomeController {
	
	@RequestMapping("/api/hello")
	public String home()
	{
		return "From SpringBoot";
	}
	
	@RequestMapping(value="search/{pcode}", method=RequestMethod.GET)
	public Promotion getPromo(@PathVariable String pcode)
	{
		System.out.println(pcode);
		//return new Promotion("aaa","2","3","4","5");
		String pcodepromocurrval[] = pcode.split(":");
		System.out.println("Promotion code entered:"+pcodepromocurrval[0]);
		System.out.println("Current Promotion only:"+pcodepromocurrval[1]);
		 RestTemplate restTemplate = new RestTemplate();
	        PromoLSCSResponse promoLSCSResponse = restTemplate.getForObject("https://www.sharedcontent1-stg.aa.com/lscs/v1/document/path/pubcontent/en_US/aadvantage-promotions/apttesting/"+pcodepromocurrval[0]+".json?project=ar5stage",PromoLSCSResponse.class);
	        System.out.println(promoLSCSResponse.toString());
	        
	        return new Promotion(promoLSCSResponse.getContent().getPromotionOrChallengeCode(),
	        		promoLSCSResponse.getContent().getKeyword(),
	        		promoLSCSResponse.getContent().getIsTrending()
	        		);
	        
	}

}
