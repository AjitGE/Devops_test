package com.CucumberCraft.stepDefinitions;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import com.CucumberCraft.API.ServicesCalls;
import com.CucumberCraft.ExcelReadWrite.DataSourceDecider;
import com.CucumberCraft.Screenshot.ScreenshotTaker;
import com.CucumberCraft.pageObjects.APT_pageObjects;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.response.Response;


public class UserStory_US859355 {
	   static Response response;
	    static Response response1;

	ArrayList <String> jsonData=new ArrayList <String>();
	static Logger log =LogManager.getLogger(UserStory_US859342.class);
	WebDriver driver=ScreenshotTaker.getScreenshot();
	
	@Given("^user clicks on the Expand button against at \"([^\"]*)\" to see details$")
	public void user_clicks_on_the_Expand_button_against_at_to_see_details(String arg1) throws Throwable {

		waitForPageToBeReady();
	    // Write code here that turns the phrase above into concrete actions
		String obtainedData=DataSourceDecider.dataFinder(arg1);
		//WebDriverWait wait = new WebDriverWait(driver, 20);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		WebElement element = driver.findElement(By.xpath(APT_pageObjects.getExpand(obtainedData)));
        element.click();
	}

	@Given("^user launch the Json url \"([^\"]*)\"$")
	public void user_launch_the_Json_url(String arg1) throws Throwable {
}
	@Given("^user perform a restcalls$")
	public void user_perform_a_restcalls() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions

		ServicesCalls.restcalls();

	}

	@Given("^user verifies the UI with respect to Json$")
	public void user_verifies_the_UI_with_respect_to_Json() throws Throwable {

		waitForPageToBeReady();

	    // Write code here that turns the phrase above into concrete actions
	    for (int i=0; i<jsonData.size();i++) {
			driver.getPageSource().contains(jsonData.get(i));
			}
	    
	    ((JavascriptExecutor)driver).executeScript("window.scrollBy(0,500)");
	    ((JavascriptExecutor)driver).executeScript("window.scrollBy(0,1000)");
		((JavascriptExecutor)driver).executeScript("window.scrollTo(0, document.body.scrollHeight)");
	}
	
	@Given("^user verify that the PromoBox is present on the page$")
	public void user_verify_that_the_PromoBox_is_present_on_the_page() throws Throwable {
		List<WebElement> listPromobox=new ArrayList<WebElement>();

		waitForPageToBeReady();

		listPromobox=driver.findElements(By.xpath(APT_pageObjects.getAllPromocodeBox(null)));
		for (int i=0;i<listPromobox.size();i++) {
			Assert.assertTrue(listPromobox.get(i).isDisplayed(),"promobox number \""+ i +"\"  is displayed" );
		}
	    
	}

	@Given("^user verify that all the PromoBox have \"([^\"]*)\" field in it$")
	public void user_verify_that_all_the_PromoBox_have_field_in_it(String arg1) throws Throwable {
		 List<WebElement> listPromobox=new ArrayList<WebElement>();

		 waitForPageToBeReady();

		switch(arg1) {
	  
	   case "Promotion dates:": 
		  
			listPromobox=driver.findElements(By.xpath(APT_pageObjects.getAllPromocodeBox(arg1)));
			for (int i=0;i<listPromobox.size();i++) {
				Assert.assertTrue(listPromobox.get(i).isDisplayed(),"promobox  \""+ i +"\"  have \""+arg1+"\" field in it" );
			}
           break; 
       case "PST codes:": 
    	   
			listPromobox=driver.findElements(By.xpath(APT_pageObjects.getAllPromocodeBox(arg1)));
			for (int i=0;i<listPromobox.size();i++) {
				Assert.assertTrue(listPromobox.get(i).isDisplayed(),"promobox  \""+ i +"\"  have \""+arg1+"\" field in it" );
			}
           break; 
       case "TA codes:": 
    	   listPromobox=driver.findElements(By.xpath(APT_pageObjects.getAllPromocodeBox(arg1)));
			for (int i=0;i<listPromobox.size();i++) {
				Assert.assertTrue(listPromobox.get(i).isDisplayed(),"promobox  \""+ i +"\"  have \""+arg1+"\" field in it" );
			}
			 break;
       case "Partner codes:": 
    	   listPromobox=driver.findElements(By.xpath(APT_pageObjects.getAllPromocodeBox(arg1)));
			for (int i=0;i<listPromobox.size();i++) {
				Assert.assertTrue(listPromobox.get(i).isDisplayed(),"promobox  \""+ i +"\"  have \""+arg1+"\" field in it" );
			}
			 break;
       case "Keywords:": 
    	   listPromobox=driver.findElements(By.xpath(APT_pageObjects.getAllPromocodeBox(arg1)));
			for (int i=0;i<listPromobox.size();i++) {
				Assert.assertTrue(listPromobox.get(i).isDisplayed(),"promobox  \""+ i +"\"  have \""+arg1+"\" field in it" );
			}
			 break; 
       default: 

           log.info("Are you sure this field \""+arg1+"\" is inside the Prormo box:"); 

	   
	   
	   }
	   
	}

	

	

@Given("^user verifies expand button is disabled against promo code \"([^\"]*)\"$")
public void user_verifies_expand_button_is_disabled_against_promo_code(String arg1) throws Throwable {

	waitForPageToBeReady();

	String obtainedData=DataSourceDecider.dataFinder(arg1);
	//WebElement element=driver.findElement(By.xpath(APT_pageObjects.getExpand(obtainedData)));
	//Assert.assertTrue(!driver.findElement(By.xpath(APT_pageObjects.getExpand(obtainedData))).;,"Expand button is disabled");
	WebElement element = driver.findElement(By.xpath(APT_pageObjects.getExpand(obtainedData)));
	Assert.assertTrue(element.getAttribute("src").contains("/Collapse-icon.svg"));
	element.click();
	Assert.assertTrue(element.getAttribute("src").contains("/Collapse-icon.svg"));
	element.click();
	Assert.assertTrue(element.getAttribute("src").contains("/Collapse-icon.svg"));
	
  
}

@Then("^user perform a rest call with url \"([^\"]*)\"$")
public void user_perform_a_rest_call_with_url(String arg1) throws Throwable {
	String obtainedData=DataSourceDecider.dataFinder(arg1);
	response=ServicesCalls.restcalls(obtainedData);
	log.info("Service response : "+ response.body().prettyPrint());
	
	
}

@Then("^User Verifies that the PromoName recieved from service call and UI is same$")
public void user_Verifies_that_the_PromoName_recieved_from_service_call_and_UI_is_same() throws Throwable {
	waitForPageToBeReady();
	String uiName=driver.findElement(By.xpath(APT_pageObjects.getPromotionName())).getText().trim();
	String serviceName=response.path("Content.PromotionName");
	Assert.assertEquals(serviceName, uiName);
  
}
@Then("^user perform a rest call with url \"([^\"]*)\" for \"([^\"]*)\"$")
public void user_perform_a_rest_call_with_url_for(String arg1, String arg2) throws Throwable {
	String obtainedData1=DataSourceDecider.dataFinder(arg1);
	String obtainedData2=DataSourceDecider.dataFinder(arg2);
	response1=ServicesCalls.postrestcalls(obtainedData1,obtainedData2);
	
}

@Then("^User Verifies that the Promotion date from the service and in The UI$")

public void user_Verifies_that_the_Promotion_date_from_the_service_and_in_The_UI() throws Throwable {
	waitForPageToBeReady();
    // Write code here that turns the phrase above into concrete actions
	String uiDate=driver.findElement(By.xpath(APT_pageObjects.getStartEndDateAfterEpansion())).getText().trim();
	
	String serviceStartDate=response.jsonPath().getString("PromoSearchResponse.PromoSearchResult.PromoSearchResultItem.PromoStartDate").replace("[", "").replace("]", "");
	String serviceEndDate=response.jsonPath().getString("PromoSearchResponse.PromoSearchResult.PromoSearchResultItem.PromoEndDate").replace("[", "").replace("]", "");
	
	String date=serviceStartDate.substring(8);
	String month=serviceStartDate.substring(5,7);
	String year=serviceStartDate.substring(0,4);
	String date1=serviceEndDate.substring(8);
	String month1=serviceEndDate.substring(5,7);
	String year1=serviceEndDate.substring(0,4);
	serviceStartDate=year+"/"+date+"/"+month;
	serviceEndDate=year1+"/"+date1+"/"+month1;
	System.out.print("start date :" +serviceStartDate+"  End date :"+serviceEndDate);
	System.out.print("UIdate  :" +uiDate);
	Assert.assertTrue(uiDate.contains(serviceStartDate));
	Assert.assertTrue(uiDate.contains(serviceEndDate));
}
public  void waitForPageToBeReady() {
	
    JavascriptExecutor js = (JavascriptExecutor)driver;

    //This loop will rotate for 100 times to check If page Is ready after every 1 second.
    //You can replace your if you wants to Increase or decrease wait time.
    for (int i=0; i<400; i++)
    { 
        try 
        {
            Thread.sleep(1000);
        }catch (InterruptedException e) {} 
        //To check page ready state.

        if (js.executeScript("return document.readyState").toString().equals("complete"))
        { 
            break; 
        }   
      }
 }




}


