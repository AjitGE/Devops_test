package com.CucumberCraft.stepDefinitions;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import com.CucumberCraft.ExcelReadWrite.DataSourceDecider;
import com.CucumberCraft.Screenshot.ScreenshotTaker;
import com.CucumberCraft.pageObjects.APT_pageObjects;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class UserStory_US859342 {

	
	static Logger log =LogManager.getLogger(UserStory_US859342.class);
	WebDriver driver=ScreenshotTaker.getScreenshot();
	@Then("^user validates searchbox named \"([^\"]*)\" is present on the page$")
	public void user_validates_searchbox_named_is_present_on_the_page(String arg1) throws Throwable {
		waitForPageToBeReady();

	    // Write code here that turns the phrase above into concrete actions
		Assert.assertTrue(driver.findElement(By.xpath(APT_pageObjects.getSearchbox(arg1))).isDisplayed(),"searchbox named " +arg1+" is present on the page ");
   
	}

	@Then("^user validates searchbox named \"([^\"]*)\" is \"([^\"]*)\"$")
	public void user_validates_searchbox_named_is(String arg1, String arg2) throws Throwable {
		waitForPageToBeReady();

	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath(APT_pageObjects.getSearchbox(arg1))).isDisplayed();
		 if(arg2.toLowerCase().equals("enabled")) 
			{
				Assert.assertTrue(driver.findElement(By.xpath(APT_pageObjects.getSearchbox(arg1))).isEnabled(), "Checkhbox "+ arg1 +" is Enabled");
				
			}
			if(arg2.toLowerCase().equals("disabled")) {
				Assert.assertTrue(!driver.findElement(By.xpath(APT_pageObjects.getSearchbox(arg1))).isEnabled(),"Checkhbox "+ arg1 +" is disabled" );
				}
		}
	
	
	
	@Given("^user can see the \"([^\"]*)\" icon\\.$")
	public void user_can_see_the_icon(String arg1) throws Throwable {

		waitForPageToBeReady();

	    // Write code here that turns the phrase above into concrete actions
		Assert.assertTrue(driver.findElement(By.xpath(APT_pageObjects.getMagnifiericon(arg1))).isDisplayed(), "Magnifier icon named "+ arg1+" is present on page");
		
	}

	@Given("^user validates Button named \"([^\"]*)\" is \"([^\"]*)\"$")
	public void user_validates_Button_named_is(String arg1, String arg2) throws Throwable {

		waitForPageToBeReady();

	    // Write code here that turns the phrase above into concrete actions
		
     
		if(arg2.toLowerCase().equals("enabled")) 
		{
			Assert.assertTrue(driver.findElement(By.xpath(APT_pageObjects.getMagnifiericon(arg1))).isEnabled(), "Button "+ arg1 +" is Enabled");
		
		}
		if(arg2.toLowerCase().equals("disabled")) 
			Assert.assertTrue(!driver.findElement(By.xpath(APT_pageObjects.getMagnifiericon(arg1))).isEnabled(),"Button "+ arg1 +" is disabled" );
	   }
          

		
	

        
	

	@Given("^user validates checkbox named \"([^\"]*)\" is present on the page$")
	public void user_validates_checkbox_named_is_present_on_the_page(String arg1) throws Throwable {

		waitForPageToBeReady();

		Assert.assertTrue(driver.findElement(By.xpath(APT_pageObjects.getChechkbox(arg1))).isDisplayed(),"Checkbox named "+ arg1+" is present on page");
	}

	@Given("^user validates Checkbox named \"([^\"]*)\" is \"([^\"]*)\"$")
	public void user_validates_Checkbox_named_is(String arg1, String arg2) throws Throwable {

		waitForPageToBeReady();


			
		 if(arg2.toLowerCase().equals("enabled")) 
			{
				Assert.assertTrue(driver.findElement(By.xpath(APT_pageObjects.getChechkbox(arg1))).isEnabled(), "Checkhbox "+ arg1 +" is Enabled");
				log.info("searchbox "+ arg1 +" is Enabled" );
			}
			if(arg2.toLowerCase().equals("disabled")) {
				Assert.assertTrue(!driver.findElement(By.xpath(APT_pageObjects.getChechkbox(arg1))).isEnabled(),"Checkhbox "+ arg1 +" is disabled" );
		 }
		
				}
	
			@Given("^user enters the Promo code \"([^\"]*)\" in Search box named \"([^\"]*)\"$")
			public void user_enters_the_Promo_code_in_Search_box_named(String arg1, String arg2) throws Throwable {

				waitForPageToBeReady();
				String Obtaineddata =DataSourceDecider.dataFinder(arg1);
				
			    driver.findElement(By.xpath(APT_pageObjects.getSearchbox(Obtaineddata))).sendKeys(Obtaineddata);
			  
			}

			@Given("^user clicks on the search button$")
			public void user_clicks_on_the_search_button() throws Throwable {
				waitForPageToBeReady();

				String name = null;
				WebDriverWait wait = new WebDriverWait(driver, 10); 
				WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath(APT_pageObjects.getMagnifiericon(name))));
				element.click();
                log.info("User clicks the button"+element.getText());	

			}

			@Given("^user validates the error message \"([^\"]*)\" on the page$")
			public void user_validates_the_error_message_on_the_page(String arg1) throws Throwable {

				waitForPageToBeReady();

			    // Write code here that turns the phrase above into concrete actions
				//String Obtaineddata =DataSourceDecider.dataFinder(arg1);
				driver.findElement(By.xpath(APT_pageObjects.getRequiredmessage(arg1)));
				 log.info("Message is seen on the screen"+ arg1);
				
			   
			}
			@Given("^user use Enter keys to click on the search button$")
			public void user_use_Enter_keys_to_click_on_the_search_button() throws Throwable {

				waitForPageToBeReady();

				String name = null;
				driver.findElement(By.xpath(APT_pageObjects.getMagnifiericon(name))).sendKeys(Keys.ENTER);
			}
			
			@Given("^user select the checkbox named \"([^\"]*)\"$")
			public void user_select_the_checkbox_named(String arg1) throws Throwable {

				waitForPageToBeReady();

			    // Write code here that turns the phrase above into concrete actions
				driver.findElement(By.xpath(APT_pageObjects.checkBox(arg1))).click();
			}
			
			@Given("^user validates error message on Search Result Tab \"([^\"]*)\" on the page$")
			public void user_validates_error_message_on_Search_Result_Tab_on_the_page(String arg1) throws Throwable {

				waitForPageToBeReady();
				Assert.assertEquals(driver.findElement(By.tagName(APT_pageObjects.getNoResponseMessage())).getText(), arg1);
			
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

	
	    
	









