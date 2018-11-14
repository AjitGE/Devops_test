package com.CucumberCraft.API;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

import com.CucumberCraft.Screenshot.ImageToPdf;


public class ServicesCalls {
public static void main(String[] args) {
	ServicesCalls.postrestcalls("https://loyalty.stage.esoa.aa.com/api/loyaltymasterpromotion/v1/promosearch", "AALAN");
}	
public static Response restcalls(String JsonPath){
	
RestAssured.useRelaxedHTTPSValidation();	
//String JsonPath="https://loyalty.stage.esoa.aa.com/api/ewcm/v1/path/pubcontent/en_US/aadvantage-promotions/promotion/RVGLD.json?project=ar5";
Response JsonContent=given().
auth().basic("S1013168","ADEA*Q5uAYJYS").
when().get(JsonPath).
then().extract().response();

ImageToPdf.restResponse=JsonContent;
//System.out.println("response :"+ JsonContent.prettyPrint());
return JsonContent;

}
public static Response postrestcalls(String postPath,String promoCode){
	String bodyofPromoSearchByName="{\r\n" + 
			"   \"PromoSearchRequest\": {\r\n" + 
			"   \"RequestInfo\": {\r\n" + 
			"     \"ServiceName\": \"LoyaltyMasterPromotionSearch\",\r\n" + 
			"     \"ServiceVersion\": \"1.0\",\r\n" + 
			"     \"ClientId\": \"ARP4-AACOM\",\r\n" + 
			"     \"AuditId\": \"AA806677\",\r\n" + 
			"     \"ClientTransactionId\": \"1234-1234\",\r\n" + 
			"     \"ClientTimeoutValue\": \"2000\"\r\n" + 
			"   },\r\n" + 
			"   \"PromoCode\": \"AAL\",\r\n" + 
			"   \"Active\": \"Y\"\r\n" + 
			" }\r\n" + 
			"}";
RestAssured.useRelaxedHTTPSValidation();	
//String JsonPath="https://loyalty.stage.esoa.aa.com/api/ewcm/v1/path/pubcontent/en_US/aadvantage-promotions/promotion/RVGLD.json?project=ar5";
Response response=given().
auth().basic("S1013168","ADEA*Q5uAYJYS").body(bodyofPromoSearchByName.replace("AAL",promoCode)).header("Content-Type", "application/json").and().
header("X-Client-Id","ARP4-APT").and().
header("Date","11122018").and().
header("X-Transaction-Id","APTTEST").and().
when().post(postPath).
then().extract().response();

ImageToPdf.restResponse=response;
//JsonPath jsonPathEvaluator=response.jsonPath();
//String onemore=jsonPathEvaluator.getString("PromoSearchResponse.PromoSearchResult.PromoSearchResultItem.PromoStartDate");
//System.out.print(onemore);
//response.prettyPrint();

return response;

}

public static void restcalls(){
	
RestAssured.baseURI="https://loyalty.qa.esoa.qcorpaa.aa.com";
RestAssured.useRelaxedHTTPSValidation();
Response JsonContent=given().
queryParam("q", "PST:code").
queryParam("project","apt").
queryParam("format","json").
auth().basic("S1013168","ADEA*Q5uAYJYS").
when().get("/api/ewcm/v1/$").
then().extract().response();
System.out.println("response :"+ JsonContent.prettyPrint());
ImageToPdf.restResponse=JsonContent;

}


}
