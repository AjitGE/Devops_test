package com.aa.apt.constants;

import org.springframework.web.bind.annotation.PathVariable;

public final class ControllerConstants {
	
	private ControllerConstants() {
	
	}
	
	public static final String ROOT_API="/api/";
	public static final String PINGSPRINGBOOT="hello";
	public static final String PCODESEARCH="search/{pcode}";
	public static final String PCODESEARCHFORAR5="search/ar5/{pcode}";
	public static final String PCODESEARCHFORACS="search/acs/{pcode}";
	
	public static final String ROOT_CRITERIA_API="/criteria/";
	public static final String BSPARAMSSEARCH="search/{keywords}/{fromdate}/{todate}/{targetornontarget}/{bcurrpromosonly}/{partnercodes}";
	
	
	// JSON Requests
	
	public static final String VEN_PROMOSEARCH_JSON_REQ="LoyaltyMasterPromotionService_PartialPromo_RequestTemplate.json";
}
