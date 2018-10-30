package com.CucumberCraft.API;

import io.restassured.RestAssured;
import static io.restassured.RestAssured.*;

import com.CucumberCraft.Screenshot.ImageToPdf;


public class ServicesCalls {
	
public static void restcalls(){
	
RestAssured.baseURI="https://loyalty.qa.esoa.qcorpaa.aa.com";
RestAssured.useRelaxedHTTPSValidation();
String response=given().
queryParam("q", "PST:code").
queryParam("project","apt").
queryParam("format","json").
auth().basic("S1013168","ADEA*Q5uAYJYS").
when().get("/api/ewcm/v1/$").
then().extract().response().getBody().asString();
System.out.println("response :"+ response);
ImageToPdf.restResponse=response;

}

}
