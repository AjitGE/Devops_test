package com.aa.apt.controller;

import java.io.IOException;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.client.RestTemplate;

import com.aa.apt.acs.response.AcsPromotionContentResponse;
import com.aa.apt.ar5.response.LscsPromotionContentResponse;
import com.aa.apt.constants.ControllerConstants;
import com.aa.apt.lscscondition.Asset;
import com.aa.apt.lscscondition.LscsConditionResponse;
import com.aa.apt.model.Promotion;
import com.aa.apt.service.AptService;
import com.aa.apt.utils.FileUtils;
import com.aa.apt.utils.NetworkUtils;
import com.aa.apt.ventana.response.PromoSearchResponse;
import com.aa.apt.ventana.response.PromoSearchResult;
import com.aa.apt.ventana.response.PromoSearchResultItem;
import com.aa.apt.ventana.response.ResponseStatus;
import com.aa.apt.ventana.response.TAC;
import com.aa.apt.ventana.response.VentanaResponse;

@RestController
@CrossOrigin
@RequestMapping(ControllerConstants.ROOT_CRITERIA_API)
public class CriteriaController {
	private static final Logger logger = LoggerFactory.getLogger(CriteriaController.class);

	@Value("${acs.promo.url.start}")
	String acsPromoUrlStart;

	@Value("${acs.promo.url.end}")
	String acsPromoUrlEnd;

	@Value("${ar5.promo.url.start}")
	String ar5PromoUrlStart;

	@Value("${ar5.promo.url.end}")
	String ar5PromoUrlEnd;

	@Value("${lscs.criteria.search.start}")
	String lscsCriteriaSearchStart;

	@Value("${lscs.criteria.search.end}")
	String lscsCriteriaSearchEnd;

	@Value("${loyalty.membersecurity.url}")
	String apiUrl;

	@Value("${loyalty.membersecurity.username}")
	String apiUsername;

	@Value("${loyalty.membersecurity.password}")
	String apiPassword;

	@Autowired
	AptService aptService;

	Map<String, Promotion> promoListMap;
	Map<String, Promotion> ventanaResultsMap;
	Map<String, Promotion> lscsResultsMap;

	@RequestMapping(ControllerConstants.PINGSPRINGBOOT)
	public String home() {
		return "From SpringBoot";
	}

	// http://localhost:8080/criteria/search/N@KEYWORDS/NOFROMDATE/NOTODATE/TARGETNOTSELECTED/BCURRPROMONOTSELECTED/NOPARTNERCODES
	@RequestMapping(value = ControllerConstants.BSPARAMSSEARCH, method = RequestMethod.GET)
	public List<Promotion> getPromo(@PathVariable("keywords") String keywords,
			@PathVariable("fromdate") String fromDate, @PathVariable("todate") String toDate,
			@PathVariable("targetornontarget") String targetOrNontarget,
			@PathVariable("bcurrpromosonly") String bCurrPromosOnly,
			@PathVariable("partnercodes") String partnerCodes) {

		Instant buildCriteriaSearchStart = Instant.now();
		promoListMap = new HashMap<>();
		ventanaResultsMap = new HashMap<>(); // Use this map in callVentanaDateService
		lscsResultsMap = new HashMap<>(); // Use this map in callLSCSCriteriaSearch

		boolean performLSCSSearch = false;
		boolean performVentanaSearch = false;

		if (!(keywords.equals("N@KEYWORDS") && targetOrNontarget.equals("TARGETNOTSELECTED")
				&& partnerCodes.equals("NOPARTNERCODES"))) {
			performLSCSSearch = true;
		}

		if (!(fromDate.equals("NOFROMDATE") && toDate.equals("NOTODATE")
				&& bCurrPromosOnly.equals("BCURRPROMONOTSELECTED"))) {
			performVentanaSearch = true;
		}

		if (performLSCSSearch && performVentanaSearch) {
			// Execute two calls simultaneously
			// callVentanaDateService(fromDate, toDate, bCurrPromosOnly);
			callLSCSCriteriaSearch(keywords, targetOrNontarget, partnerCodes);

			// consolidate search results of two calls in promoListMap
			// promoListMap = ventanaResultsMap + lscsResultsMap
			// Reference -
			// https://stackoverflow.com/questions/4299728/how-can-i-combine-two-hashmap-objects-containing-the-same-types

		} else if (performVentanaSearch) {

			callVentanaDateService(fromDate, toDate, bCurrPromosOnly);
			promoListMap.putAll(ventanaResultsMap);

		} else if (performLSCSSearch) {

			callLSCSCriteriaSearch(keywords, targetOrNontarget, partnerCodes);
			promoListMap.putAll(lscsResultsMap);

		}

		if (promoListMap.size() == 1) {
			getAR5andACSData(promoListMap.keySet().stream().collect(Collectors.toList()));
		}

		Instant buildCriteriaSearchEnd = Instant.now();
		long buildCriteriaSearchTimeElapsed = Duration.between(buildCriteriaSearchStart, buildCriteriaSearchEnd)
				.toMillis();
		if (logger.isDebugEnabled())
			logger.debug("Time elapsed to build list of promo(s) for given criteria {} : {} (in Millis)", keywords,
					buildCriteriaSearchTimeElapsed);

		return promoListMap.values().stream().collect(Collectors.toList());

	}

	public void callLSCSCriteriaSearch(String keywords, String targetOrNontarget, String partnerCodes) {
		// LSCS service - Build QueryParam and get MetaData - "Ready to code"
		// Ventana service - If data present, call PromoList service - "Yet to ready -
		// Planned 10/03"

		// Build LSCS query parameter
		// Keywords - Multiple value, Pattern search "KeyWord:upgrad,mil"
		// TargetOnly/NonTargetOnly - Single value, Exact search "Targeted:false" or
		// "Targeted:true"
		// Partnercodes - Yet to come
		String lscsQueryParam = "";

		if (!(keywords.equals("N@KEYWORDS"))) {
			lscsQueryParam = "KeyWord:" + keywords;
		}

		RestTemplate restTemplate = new RestTemplate();
		LscsConditionResponse lscsConditionResponse = restTemplate.getForObject(
				lscsCriteriaSearchStart + lscsQueryParam + lscsCriteriaSearchEnd, LscsConditionResponse.class);

		if (Integer.parseInt(lscsConditionResponse.getTotal()) != 0) {
			List<Asset> assetsList = lscsConditionResponse.getResults().getAssets();
			assetsList.stream().forEach(asset -> {
				Promotion singlePromo = new Promotion();
				String promoCode = asset.getMetadata().getPromotionId();
				singlePromo.setPromotionOrChallengeCode(promoCode);
				singlePromo.setKeyword(getString(asset.getMetadata().getKeywords()));
				singlePromo.setIsTrending(getString(asset.getMetadata().getTrending()));
				singlePromo.setPromoCode(promoCode);
				singlePromo.setPSTCodes(getString(asset.getMetadata().getPst()));
				singlePromo.setPromotionName("From MetaData - Next Iteration");
				singlePromo.setPartnerCodes("From Metadata - Next Iteration");
				lscsResultsMap.put(promoCode, singlePromo);
			});
		}

		// call Ventana service - PromoList search - send list of PromoCodes
		// (lscsResultsMap.getKey())

	}

	public void callVentanaDateService(String fromDate, String toDate, String bCurrPromosOnly) {

		// Ventana service - Using Dates, get Ventana response - "Yet to ready - Planned
		// 10/17"
		// LSCS service - If data present, call PromotionIds service and get MetaData -
		// "Ready to code"
	}

	/**
	 * Get List of Promotions from a Single or Partial Promo/TA code
	 * 
	 * @param pcode (PromoCode:CurrentPromotionsOnlyFlag)
	 * @throws IOException
	 */

	public void getPromosFromVentana(String pcode) throws IOException {

		Instant buildVentanaResponseStart = Instant.now();

		String[] pcodepromocurrval = pcode.split(":");

		HttpHeaders requestHeaders = createVentanaPromoHeader();// Promo request header set for Ventana

		String requestBody = buildPartialPromoRequestBody(ControllerConstants.VEN_PROMOSEARCH_JSON_REQ,
				pcodepromocurrval[0], pcodepromocurrval[1]);

		HttpEntity<String> request = new HttpEntity<>(requestBody, requestHeaders);

		RestTemplate restTemplate = new RestTemplate();

		Instant consumeVentanPartialPromoSearchStart = Instant.now();
		ResponseEntity<VentanaResponse> response = restTemplate.exchange(apiUrl, HttpMethod.POST, request,
				VentanaResponse.class);

		Instant consumeVentanPartialPromoSearchEnd = Instant.now();
		long consumeVentanaPartialPromoSearchTimeElapsed = Duration
				.between(consumeVentanPartialPromoSearchStart, consumeVentanPartialPromoSearchEnd).toMillis();
		if (logger.isDebugEnabled())
			logger.debug(
					"Time elapsed to consume Ventana partial Promo code search service for given code {} : {} (in Millis)",
					pcodepromocurrval[0], consumeVentanaPartialPromoSearchTimeElapsed);

		Instant parseVentanPartialPromoSearchStart = Instant.now();
		VentanaResponse ventanaResponse = response.getBody();
		PromoSearchResponse promoSearchResponse = ventanaResponse.getPromoSearchResponse();
		ResponseStatus responseStatus = promoSearchResponse.getResponseStatus();

		if (responseStatus.getMessage().equals("Successful Execution")) {

			PromoSearchResult promoSearchResult = promoSearchResponse.getPromoSearchResult();
			List<PromoSearchResultItem> promoSearchResultItemList = promoSearchResult.getPromoSearchResultItem();
			Iterator<PromoSearchResultItem> promoSearchResultItemItr = promoSearchResultItemList.iterator();
			createPromotionMap(promoSearchResultItemItr);

		} else if (responseStatus.getMessage().equals("No Promotions Found")) {
			logger.info("No Promotions found in Ventana for Promo code search : {}", pcodepromocurrval[0]);
		}

		Instant parseVentanPartialPromoSearchEnd = Instant.now();
		long parseVentanaPartialPromoSearchTimeElapsed = Duration
				.between(parseVentanPartialPromoSearchStart, parseVentanPartialPromoSearchEnd).toMillis();
		if (logger.isDebugEnabled())
			logger.debug(
					"Time elapsed to parse Ventana partial Promo code search service for given code {} : {} (in Millis)",
					pcodepromocurrval[0], parseVentanaPartialPromoSearchTimeElapsed);

		Instant buildVentanaResponseEnd = Instant.now();
		long buildVentanaResponseTimeElapsed = Duration.between(buildVentanaResponseStart, buildVentanaResponseEnd)
				.toMillis();
		if (logger.isDebugEnabled())
			logger.debug("Time elapsed to build ventana response for given code {} : {} (in Millis)", pcode,
					buildVentanaResponseTimeElapsed);

	}

	/**
	 * 
	 * Create promotion details and put it inside the promotion map
	 * 
	 * @param promoSearchResultItemItr
	 */
	private void createPromotionMap(Iterator<PromoSearchResultItem> promoSearchResultItemItr) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
		while (promoSearchResultItemItr.hasNext()) {
			Promotion singlePromo = new Promotion();
			PromoSearchResultItem promoSearchResultItem = promoSearchResultItemItr.next();
			singlePromo.setPromoCode(getString(promoSearchResultItem.getPromoCode()));
			singlePromo.setPromoStartDate(LocalDate.parse(promoSearchResultItem.getPromoStartDate(), formatter));
			singlePromo.setPromoEndDate(LocalDate.parse(promoSearchResultItem.getPromoEndDate(), formatter));
			singlePromo.setMemRegStartDate(getString(promoSearchResultItem.getRegistrationStartDate()));
			singlePromo.setMemRegEndDate(getString(promoSearchResultItem.getAACOMRegistrationEndDate()));
			singlePromo.setMemTravelStartDate(getString(promoSearchResultItem.getActivityStartDate()));
			singlePromo.setMemTravelEndDate(getString(promoSearchResultItem.getActivityEndDate()));
			singlePromo.setLateRegEndDate(getString(promoSearchResultItem.getRegistrationEndDate()));
			singlePromo.setVentanaPromoName(getString(promoSearchResultItem.getPromoName()));
			singlePromo.setVentanaPromoDesc(getString(promoSearchResultItem.getDescription()));
			singlePromo.setVentanaPromoType(getString(promoSearchResultItem.getPromoType()));
			singlePromo.setActiveornot(getString(promoSearchResultItem.getActive()));

			if (promoSearchResultItem.getTACList() != null) {
				List<TAC> tacList = promoSearchResultItem.getTACList().getTacList();
				singlePromo.setTac(tacList.stream().map(tac -> tac.getCode()).collect(Collectors.joining(",")));
			} else {
				singlePromo.setTac("N/A");
			}

			promoListMap.put(promoSearchResultItem.getPromoCode(), singlePromo);
		}
	}

	/**
	 * Create Promotions object and map to List of promotions
	 * 
	 * @param promoCodeList
	 */
	private void getAR5andACSData(List<String> promoCodeList) {
		/*
		 * RestTemplate restTemplate = new RestTemplate(); for (int i = 0; i <
		 * promoCodeList.size(); i++) { Promotion prom =
		 * promoListMap.get(promoCodeList.get(i)); Instant buildSinglePromoStart =
		 * Instant.now(); Instant ar5ResponseStart = Instant.now();
		 * logger.info("Getting AR5 response for promo code : {}" ,
		 * promoCodeList.get(i)); LscsPromotionContentResponse ar5response =
		 * restTemplate.getForObject( ar5PromoUrlStart + promoCodeList.get(i) +
		 * ar5PromoUrlEnd, LscsPromotionContentResponse.class); Instant ar5ResponseEnd =
		 * Instant.now(); long ar5ResponseTimeElapsed =
		 * Duration.between(ar5ResponseStart, ar5ResponseEnd).toMillis(); if
		 * (logger.isDebugEnabled()) { logger.
		 * debug("Time elapsed to get AR5 response for promo code {} :{} (in Millis)",
		 * promoCodeList.get(i), ar5ResponseTimeElapsed); } Instant
		 * ar5ParseResponseStart = Instant.now();
		 * prom.setPromotionName(ar5response.getContent().getPromotionName());
		 * prom.setAacomview(getLSCSContent(ar5response.getContent().getMainContent()));
		 * prom.setTermsandconditions(getLSCSContent(ar5response.getContent().
		 * getTermsAndConditions())); Instant ar5ParseResponseEnd = Instant.now(); long
		 * ar5ParseResTimeElapsed = Duration.between(ar5ParseResponseStart,
		 * ar5ParseResponseEnd).toMillis(); if (logger.isDebugEnabled()) { logger.
		 * debug("Time elapsed to parse AR5 response for promo code {} :{} (in Millis)",
		 * promoCodeList.get(i), ar5ParseResTimeElapsed); }
		 * 
		 * try { Instant acsResponseStart = Instant.now(); AcsPromotionContentResponse
		 * acsresponse = restTemplate.getForObject( acsPromoUrlStart +
		 * promoCodeList.get(i) + acsPromoUrlEnd, AcsPromotionContentResponse.class);
		 * Instant acsResponseEnd = Instant.now(); long acsResTimeElapsed =
		 * Duration.between(acsResponseStart, acsResponseEnd).toMillis(); if
		 * (logger.isDebugEnabled()) logger.
		 * debug("Time elapsed to get ACS response for promo code {} : {} (in Millis)",
		 * promoCodeList.get(i), acsResTimeElapsed); Instant acsParseResStart =
		 * Instant.now(); prom.setPromotionOrChallengeCode(acsresponse.getContent().
		 * getPromotionOrChallengeCode());
		 * prom.setIsTrending(acsresponse.getContent().getIsTrending());
		 * prom.setKeyword(acsresponse.getContent().getKeywords());
		 * prom.setRegistrationRequired(acsresponse.getContent().getIsMemberRegistration
		 * ());
		 * prom.setTargetedPromotion(acsresponse.getContent().getTargetedPromotion());
		 * prom.setHowToEarn(getLSCSContent(acsresponse.getContent().getHowToEarn()));
		 * prom.setFulfillment(getLSCSContent(acsresponse.getContent().getFulfillment())
		 * ); prom.setResolveIssues(getLSCSContent(acsresponse.getContent().
		 * getResolveIssues())); prom.setPSTCodes("From ACS Template");
		 * prom.setPartnerCodes("From ACS Template");
		 * prom.setDirectmailer(acsresponse.getContent().getCommunications().get(0).
		 * getIsDirectMailer()); prom.setMarketingpageurl(
		 * getMarketingPageUrl(acsresponse.getContent().getCommunications().get(0).
		 * getMarketingPageUrl()));
		 * prom.setEmailurl(getEmailContent(acsresponse.getContent().getCommunications()
		 * .get(0).getEmail()));
		 * 
		 * Instant acsParseResEnd = Instant.now(); long acsParseResTimeElapsed =
		 * Duration.between(acsParseResStart, acsParseResEnd).toMillis(); if
		 * (logger.isDebugEnabled()) logger.
		 * debug("Time elapsed to parse ACS response for promo code {} : {} (in Millis)"
		 * , promoCodeList.get(i), acsParseResTimeElapsed); } catch
		 * (HttpClientErrorException hcee) { logger.error("Promo code " +
		 * promoCodeList.get(i) + " not found in ACS - Got " + hcee.getStatusCode() +
		 * " Not found error"); }
		 * 
		 * Instant buildSinglePromoEnd = Instant.now(); long buildSinglePromoTimeElapsed
		 * = Duration.between(buildSinglePromoStart, buildSinglePromoEnd).toMillis(); if
		 * (logger.isDebugEnabled())
		 * logger.debug("Time elapsed to build promo code {} : {} (in Millis)",
		 * promoCodeList.get(i), buildSinglePromoTimeElapsed);
		 * promoListMap.put(promoCodeList.get(i), prom);
		 * 
		 * }
		 * 
		 */

		promoCodeList.stream().forEach(string -> {

			Promotion prom = promoListMap.get(string);
			prom.setPromotionOrChallengeCode(string);
			Instant buildSinglePromoStart = Instant.now();

			CompletableFuture<LscsPromotionContentResponse> ar5response;
			CompletableFuture<AcsPromotionContentResponse> acsresponse;
			try {
				ar5response = aptService.getAr5LscsPromotionContentResponse(prom);
				acsresponse = aptService.getAcsPromotionContentResponse(prom);
				// Wait until they are all done
				CompletableFuture.allOf(ar5response, acsresponse).join();
			} catch (Exception e) {
				logger.error(e.getMessage());
			}
			Instant buildSinglePromoEnd = Instant.now();
			long buildSinglePromoTimeElapsed = Duration.between(buildSinglePromoStart, buildSinglePromoEnd).toMillis();
			if (logger.isDebugEnabled())
				logger.debug("Time elapsed to build LSCS content for single promo code {} : {} (in Millis)", string,
						buildSinglePromoTimeElapsed);
			promoListMap.put(string, prom);
		});
	}

	/**
	 * Create header object for promotion request
	 * 
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
	 * 
	 * @param json request file path, promoCode, currentPromotionsOnlyFlag
	 * @return String
	 */
	private String buildPartialPromoRequestBody(String jsonfile, String pcode, String currpromoflag)
			throws IOException {
		String promoSearchReqTemplate = FileUtils.getResourceToString("rest-requests/" + jsonfile);
		return promoSearchReqTemplate.replace("REPLACESERVICENAME", "LoyaltyMasterPromotionSearch")
				.replace("REPLACESERVICEVERSION", "1.0").replace("REPLACECLIENTID", "ARP4-AACO")
				.replace("REPLACEAUDITID", "AA806677").replace("REPLACECLIENTTRANSACTIONID", "1234-1234")
				.replace("REPLACEPROMOCODE", pcode).replace("REPLACESTARTDATE", "").replace("REPLACEENDDATE", "")
				.replaceAll("REPLACEACTIVEFLAG", currpromoflag.equals("true") ? "Y" : "N");
	}

	private String getString(String str) {
		return isNotNullOrEmpty(str) ? str : "N/A";
	}

	private boolean isNotNullOrEmpty(String str) {
		return str != null && !str.isEmpty();
	}

}
