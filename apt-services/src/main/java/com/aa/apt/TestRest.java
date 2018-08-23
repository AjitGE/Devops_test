package com.aa.apt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.client.RestTemplate;

//import com.aa.apt.model.PromoLSCSResponse;

public class TestRest {

	private static final Logger log = LoggerFactory.getLogger(TestRest.class);

    public static void main(String args[]) {
        RestTemplate restTemplate = new RestTemplate();
        //PromoLSCSResponse response = restTemplate.getForObject("https://www.lscs-tst-adv.qcorpaa.aa.com/lscs/v1/document/path/pubcontent/en_US/aadvantage-promotions/apttesting/RDLEP.json?project=ar5", PromoLSCSResponse.class);
        //log.info(response.getContent().getPromotionOrChallengeCode());
    }

}
