package com.aa.apt.controller;

import java.io.IOException;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
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
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.aa.apt.acs.response.AcsPromotionContentResponse;
import com.aa.apt.acs.response.Email;
import com.aa.apt.acs.response.MarketingPageUrl;
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
import com.aa.apt.service.AptService;
import com.aa.apt.utils.FileUtils;
import com.aa.apt.utils.NetworkUtils;
import com.aa.apt.ventana.response.PingVentana;
import com.aa.apt.ventana.response.PromoSearchResponse;
import com.aa.apt.ventana.response.PromoSearchResult;
import com.aa.apt.ventana.response.PromoSearchResultItem;
import com.aa.apt.ventana.response.ResponseStatus;
import com.aa.apt.ventana.response.TAC;
import com.aa.apt.ventana.response.TACList;
import com.aa.apt.ventana.response.VentanaResponse;

@RestController
@CrossOrigin
@RequestMapping(ControllerConstants.ROOT_API)
public class AptController {
	private static final Logger logger = LoggerFactory.getLogger(AptController.class);

	@Value("${acs.promo.url.start}")
	String acsPromoUrlStart;

	@Value("${acs.promo.url.end}")
	String acsPromoUrlEnd;

	@Value("${ar5.promo.url.start}")
	String ar5PromoUrlStart;

	@Value("${ar5.promo.url.end}")
	String ar5PromoUrlEnd;

	@Value("${loyalty.membersecurity.url}")
	String apiUrl;

	@Value("${loyalty.membersecurity.username}")
	String apiUsername;

	@Value("${loyalty.membersecurity.password}")
	String apiPassword;

	@Value("${ventana.ping.url}")
	String ventanaPingUrl;

	@Value("${loyalty.ventana.promosearch}")
	String ventanaPromoSearch;

	@Value("${loyalty.ventana.version}")
	String ventanaPromoSearchVersion;

	@Value("${loyalty.ventana.clientid}")
	String ventanaPromoSearchClientId;

	@Value("${loyalty.ventana.auditid}")
	String ventanaPromoSearchAuditId;

	@Value("${loyalty.ventana.transactionid}")
	String ventanaPromoSearchTransactionId;

	@Value("${loyalty.ventana.head.clientid}")
	String ventanaHeadClientId;

	@Value("${loyalty.ventana.head.transactionid}")
	String ventanaHeadTransactionId;
	
	@Autowired
    AptService aptService;

	Map<String, Promotion> promoListMap;

	@RequestMapping(ControllerConstants.PINGSPRINGBOOT)
	public String home() {
		return "From SpringBoot";
	}

	// http://localhost:8080/api/search/P468B:false
	@RequestMapping(value = ControllerConstants.PCODESEARCH, method = RequestMethod.GET)
	public List<Promotion> getPromo(@PathVariable("pcode") String pcode) throws IOException, InterruptedException {

		Instant buildPromoSearchStart = Instant.now();

		promoListMap = new HashMap<>();
		 getPromosFromVentana(pcode);
		
		/*
		promoListMap.put("RVGLD", new Promotion());
		promoListMap.put("RDLEP", new Promotion());
		promoListMap.put("RHVGL", new Promotion());
		promoListMap.put("RHVEP", new Promotion());
		promoListMap.put("EHI02", new Promotion());
		promoListMap.put("RHVPP", new Promotion());
		promoListMap.put("P468B", new Promotion());
		*/
		

		List<String> promoCodeList = new ArrayList<>(promoListMap.keySet().stream().collect(Collectors.toList()));
		if (promoCodeList.isEmpty()) {
			// Call LSCS and perform PST code search
		}

		createPromoListForVentanaResults(promoCodeList);

		Instant buildPromoSearchEnd = Instant.now();
		long buildPromoSearchTimeElapsed = Duration.between(buildPromoSearchStart, buildPromoSearchEnd).toMillis();
		if (logger.isDebugEnabled())
			logger.debug("Time elapsed to build list of promo(s) for given code {} : {} (in Millis)", pcode,
					buildPromoSearchTimeElapsed);

		return promoListMap.values().stream().collect(Collectors.toList());

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

		HttpHeaders requestHeaders = createVentanaPromoHeader(); // Promo request header set for Ventana

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
		while (promoSearchResultItemItr.hasNext()) {

			Promotion singlePromo = new Promotion();
			PromoSearchResultItem promoSearchResultItem = promoSearchResultItemItr.next();
			singlePromo.setPromoStartDate(getString(promoSearchResultItem.getPromoStartDate()));
			singlePromo.setPromoEndDate(getString(promoSearchResultItem.getPromoEndDate()));
			singlePromo.setMemRegStartDate(getString(promoSearchResultItem.getRegistrationStartDate()));
			singlePromo.setMemRegEndDate(getString(promoSearchResultItem.getAACOMRegistrationEndDate()));
			singlePromo.setMemTravelStartDate(getString(promoSearchResultItem.getActivityStartDate()));
			singlePromo.setMemTravelEndDate(getString(promoSearchResultItem.getActivityEndDate()));
			singlePromo.setLateRegEndDate(getString(promoSearchResultItem.getRegistrationEndDate()));
			singlePromo.setVentanaPromoName(getString(promoSearchResultItem.getPromoName()));
			singlePromo.setVentanaPromoDesc(getString(promoSearchResultItem.getDescription()));
			singlePromo.setVentanaPromoType(getString(promoSearchResultItem.getPromoType()));
			singlePromo.setActiveornot(getString(promoSearchResultItem.getActive()));
			
			if (promoSearchResultItem.getTACList()!=null) {
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
	private void createPromoListForVentanaResults(List<String> promoCodeList) throws InterruptedException {
		/*
		RestTemplate restTemplate = new RestTemplate();
		for (int i = 0; i < promoCodeList.size(); i++) {
			Promotion prom = promoListMap.get(promoCodeList.get(i));
			Instant buildSinglePromoStart = Instant.now();
			Instant ar5ResponseStart = Instant.now();
			logger.info("Getting AR5 response for promo code : {}" , promoCodeList.get(i));
			LscsPromotionContentResponse ar5response = restTemplate.getForObject(
					ar5PromoUrlStart + promoCodeList.get(i) + ar5PromoUrlEnd, LscsPromotionContentResponse.class);
			Instant ar5ResponseEnd = Instant.now();
			long ar5ResponseTimeElapsed = Duration.between(ar5ResponseStart, ar5ResponseEnd).toMillis();
			if (logger.isDebugEnabled()) {
				logger.debug("Time elapsed to get AR5 response for promo code {} :{} (in Millis)", promoCodeList.get(i),
						ar5ResponseTimeElapsed);
			}
			Instant ar5ParseResponseStart = Instant.now();
			prom.setPromotionName(ar5response.getContent().getPromotionName());
			prom.setAacomview(getLSCSContent(ar5response.getContent().getMainContent()));
			prom.setTermsandconditions(getLSCSContent(ar5response.getContent().getTermsAndConditions()));
			Instant ar5ParseResponseEnd = Instant.now();
			long ar5ParseResTimeElapsed = Duration.between(ar5ParseResponseStart, ar5ParseResponseEnd).toMillis();
			if (logger.isDebugEnabled()) {
				logger.debug("Time elapsed to parse AR5 response for promo code {} :{} (in Millis)",
						promoCodeList.get(i), ar5ParseResTimeElapsed);
			}

			try {
				Instant acsResponseStart = Instant.now();
				AcsPromotionContentResponse acsresponse = restTemplate.getForObject(
						acsPromoUrlStart + promoCodeList.get(i) + acsPromoUrlEnd, AcsPromotionContentResponse.class);
				Instant acsResponseEnd = Instant.now();
				long acsResTimeElapsed = Duration.between(acsResponseStart, acsResponseEnd).toMillis();
				if (logger.isDebugEnabled())
					logger.debug("Time elapsed to get ACS response for promo code {} : {} (in Millis)",
							promoCodeList.get(i), acsResTimeElapsed);
				Instant acsParseResStart = Instant.now();
				prom.setPromotionOrChallengeCode(acsresponse.getContent().getPromotionOrChallengeCode());
				prom.setIsTrending(acsresponse.getContent().getIsTrending());
				prom.setKeyword(acsresponse.getContent().getKeywords());
				prom.setRegistrationRequired(acsresponse.getContent().getIsMemberRegistration());
				prom.setTargetedPromotion(acsresponse.getContent().getTargetedPromotion());
				prom.setHowToEarn(getLSCSContent(acsresponse.getContent().getHowToEarn()));
				prom.setFulfillment(getLSCSContent(acsresponse.getContent().getFulfillment()));
				prom.setResolveIssues(getLSCSContent(acsresponse.getContent().getResolveIssues()));
				prom.setPSTCodes("From ACS Template");
				prom.setPartnerCodes("From ACS Template");
				prom.setDirectmailer(acsresponse.getContent().getCommunications().get(0).getIsDirectMailer());
				prom.setMarketingpageurl(
						getMarketingPageUrl(acsresponse.getContent().getCommunications().get(0).getMarketingPageUrl()));
				prom.setEmailurl(getEmailContent(acsresponse.getContent().getCommunications().get(0).getEmail()));

				Instant acsParseResEnd = Instant.now();
				long acsParseResTimeElapsed = Duration.between(acsParseResStart, acsParseResEnd).toMillis();
				if (logger.isDebugEnabled())
					logger.debug("Time elapsed to parse ACS response for promo code {} : {} (in Millis)",
							promoCodeList.get(i), acsParseResTimeElapsed);
			} catch (HttpClientErrorException hcee) {
				logger.error("Promo code " + promoCodeList.get(i) + " not found in ACS - Got " + hcee.getStatusCode()
						+ " Not found error");
			}

			Instant buildSinglePromoEnd = Instant.now();
			long buildSinglePromoTimeElapsed = Duration.between(buildSinglePromoStart, buildSinglePromoEnd).toMillis();
			if (logger.isDebugEnabled())
				logger.debug("Time elapsed to build promo code {} : {} (in Millis)", promoCodeList.get(i),
						buildSinglePromoTimeElapsed);
			promoListMap.put(promoCodeList.get(i), prom);

		}
		
		*/
		
		
		for (int i = 0; i < promoCodeList.size(); i++) {
			Promotion prom = promoListMap.get(promoCodeList.get(i));
			prom.setPromotionOrChallengeCode(promoCodeList.get(i));
			Instant buildSinglePromoStart = Instant.now();
			
		
			 CompletableFuture<LscsPromotionContentResponse> ar5response = aptService.getAr5LscsPromotionContentResponse(prom);
		     CompletableFuture<AcsPromotionContentResponse> acsresponse = aptService.getAcsPromotionContentResponse(prom);
		        // Wait until they are all done
		     CompletableFuture.allOf(ar5response, acsresponse).join();

			Instant buildSinglePromoEnd = Instant.now();
			long buildSinglePromoTimeElapsed = Duration.between(buildSinglePromoStart,buildSinglePromoEnd).toMillis();
			if(logger.isDebugEnabled())
				logger.debug("Time elapsed to build promo code {} : {} (in Millis)",promoCodeList.get(i),buildSinglePromoTimeElapsed);
			promoListMap.put(promoCodeList.get(i), prom);

		}
		
	}

	/**
	 * Create header object for promotion request
	 * 
	 * @return HttpHeaders
	 */
	private HttpHeaders createVentanaPromoHeader() {

		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMddyyyy");

		String basicAuthToken = NetworkUtils.generateBasicAuthToken(apiUsername, apiPassword);
		HttpHeaders requestHeaders = new HttpHeaders();
		requestHeaders.set("Accept", MediaType.APPLICATION_JSON_VALUE);
		requestHeaders.add("Content-Type", ControllerConstants.VEN_CONTENTTYPE);
		requestHeaders.set("X-Client-ID", ventanaHeadClientId);
		requestHeaders.set("X-Transaction-ID", ventanaHeadTransactionId);
		requestHeaders.set("Date", LocalDate.now().format(formatter));

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
		return promoSearchReqTemplate.replace("REPLACESERVICENAME", ventanaPromoSearch)
				.replace("REPLACESERVICEVERSION", ventanaPromoSearchVersion)
				.replace("REPLACECLIENTID", ventanaPromoSearchClientId)
				.replace("REPLACEAUDITID", ventanaPromoSearchAuditId)
				.replace("REPLACECLIENTTRANSACTIONID", ventanaPromoSearchTransactionId)
				.replace("REPLACEPROMOCODE", pcode).replace("REPLACESTARTDATE", "").replace("REPLACEENDDATE", "")
				.replaceAll("REPLACEACTIVEFLAG", currpromoflag.equalsIgnoreCase("true") ? "Y" : "N");
	}

	

	
	// http://localhost:8080/api/search/ar5/P468B
	@RequestMapping(value = ControllerConstants.PCODESEARCHFORAR5, method = RequestMethod.GET)
	public LscsPromotionContentResponse getPromoDetailsFromAR5(@PathVariable("pcode") String pcode) {
		RestTemplate restTemplate = new RestTemplate();
		logger.info("AR5 URL trying to access: {}", ar5PromoUrlStart + pcode + ar5PromoUrlEnd);
		LscsPromotionContentResponse ar5response = restTemplate.getForObject(ar5PromoUrlStart + pcode + ar5PromoUrlEnd,
				LscsPromotionContentResponse.class);
		logger.debug("--------------Ping AR5-----{}", ar5response.getContent());

		return ar5response;
	}

	// http://localhost:8080/api/search/acs/RVGLD
	@RequestMapping(value = ControllerConstants.PCODESEARCHFORACS, method = RequestMethod.GET)
	public AcsPromotionContentResponse getPromoDetailsFromACS(@PathVariable("pcode") String pcode) {
		RestTemplate restTemplate = new RestTemplate();
		logger.info("ACS URL trying to access: {}", acsPromoUrlStart + pcode + acsPromoUrlEnd);
		AcsPromotionContentResponse acsresponse = restTemplate.getForObject(acsPromoUrlStart + pcode + acsPromoUrlEnd,
				AcsPromotionContentResponse.class);
		logger.debug("--------------Ping AR5-----{}", acsresponse.getContent());

		return acsresponse;
	}

	// http://localhost:8080/api/ping/ventana
	@RequestMapping(value = ControllerConstants.PINGVENTANA, method = RequestMethod.GET)
	public ResponseEntity<PingVentana> pingVentna() throws IOException {
		HttpHeaders requestHeaders = createVentanaPromoHeader(); // Promo request header set for Ventana
		String requestBody = buildPingVentanaRequestBody(ControllerConstants.VEN_PING_JSON_REQ,
				ControllerConstants.PINGSTRING);

		HttpEntity<String> request = new HttpEntity<>(requestBody, requestHeaders);
		RestTemplate restTemplate = new RestTemplate();
		logger.info("Ventana PING URL trying to access: {}", ventanaPingUrl);
		return restTemplate.exchange(ventanaPingUrl, HttpMethod.POST, request, PingVentana.class);

	}

	/**
	 * Read JSON Request file and replace required elements
	 * 
	 * @param json request file path, promoCode, currentPromotionsOnlyFlag
	 * @return String
	 */
	private String buildPingVentanaRequestBody(String jsonfile, String ping) throws IOException {
		String promoSearchReqTemplate = FileUtils.getResourceToString("rest-requests/" + jsonfile);
		return promoSearchReqTemplate.replace("REPLACEPING", ping);
	}
	
	private String getString(String str)
	{
		return isNotNullOrEmpty(str) ? str : "N/A";
	}
	
	private boolean isNotNullOrEmpty(String str) {
        return str != null && !str.isEmpty();
    }

}
