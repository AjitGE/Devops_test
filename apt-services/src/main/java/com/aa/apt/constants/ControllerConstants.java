package com.aa.apt.constants;

public final class ControllerConstants {
	
	private ControllerConstants() {
	
	}
	
	// Request Mapping variables
	public static final String ROOT_API="/api/";
	public static final String PINGSPRINGBOOT="hello";
	public static final String PCODESEARCH="search/{pcode}";
	public static final String PROMODETAILSEARCH="promodetail/{promoCode}";
	public static final String PCODESEARCHFORAR5="search/ar5/{pcode}";
	public static final String PCODESEARCHFORACS="search/acs/{pcode}";
	
	public static final String ROOT_CRITERIA_API="/criteria/";
	public static final String BSPARAMSSEARCH="search/{keywords}/{fromdate}/{todate}/{targetornontarget}/{bcurrpromosonly}/{partnercodes}";
	
	// Ventana variables
	public static final String PINGVENTANA = "ping/ventana";
	public static final String PINGSTRING = "Ping";
	public static final String VEN_CONTENTTYPE = "application/json";
	
	// JSON Requests - Ventana
	public static final String VEN_PROMOSEARCH_JSON_REQ="LoyaltyMasterPromotionService_PartialPromo_RequestTemplate.json";
	public static final String VEN_PING_JSON_REQ="PingVentanaRequest.json";
}
