package com.CucumberCraft.stepDefinitions;


import java.util.Properties;

import org.apache.log4j.Logger;

import org.openqa.selenium.WebDriver;

import com.CucumberCraft.supportLibraries.DriverFactory;
import com.CucumberCraft.supportLibraries.DriverManager;




import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.SessionId;
import com.CucumberCraft.ExcelReadWrite.ExcelReadWrite;
import com.CucumberCraft.Screenshot.ImageToPdf;
import com.CucumberCraft.supportLibraries.Settings;
import com.github.mkolisnyk.cucumber.reporting.CucumberResultsOverview;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.appium.java_client.AppiumDriver;

public class CukeHooks extends MasterStepDefs {
		static Logger log;
	static Properties properties = Settings.getInstance();

	static {
		log = Logger.getLogger(CukeHooks.class);
	}

	@Before
	public void setUp(Scenario scenario) {
		
		ExcelReadWrite.tagNames(scenario);
		ImageToPdf.freeSmokePng();
		
		try {
			currentScenario = scenario;
			propertiesFileAccess = properties;
			Thread.sleep(2000);
		    
			currentTestParameters.setScenarioName(scenario.getName());
			
			currentTestParameters = DriverManager.getTestParameters();
			log.info("Running the Scenario : " + scenario.getName());
			if (Boolean.parseBoolean(propertiesFileAccess.getProperty("ExecuteInMobile"))) {
				invokeForMobileExecution(scenario);
			} else {	
				invokeForDesktopExecution(scenario);
			}
		} catch (Exception e) {
			e.printStackTrace();
			log.error("Error at Before Scenario " + e.getMessage());
		}
	}
	@Before
	private void invokeForDesktopExecution(Scenario scenario) {
		switch (currentTestParameters.getExecutionMode()) {

		case LOCAL:
		case REMOTE:
		case SAUCELABS:
			log.info(
					"Running the Scenario : " + scenario.getName() + " in " + currentTestParameters.getExecutionMode());
			WebDriver driver = DriverFactory.createInstanceWebDriver(currentTestParameters);
			DriverManager.setWebDriver(driver);
			break;

		default:
			try {
				throw new Exception("Unhandled Execution Mode!");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	@SuppressWarnings("rawtypes")
	private void invokeForMobileExecution(Scenario scenario) {
		switch (currentTestParameters.getExecutionMode()) {

		case MOBILE:
		case SAUCELABS:
		case PERFECTO:
		case MINT:

			log.info(
					"Running the Scenario : " + scenario.getName() + " in " + currentTestParameters.getExecutionMode());
			AppiumDriver driver = DriverFactory.createInstance(currentTestParameters);
			DriverManager.setAppiumDriver(driver);
			break;

		/*case SEETEST:

			log.info(
					"Running the Scenario : " + scenario.getName() + " in " + currentTestParameters.getExecutionMode());
			MobileWebDriver seetestDriver = DriverFactory.createInstanceSeetestDriver(currentTestParameters);
			DriverManager.setSeetestDriver(seetestDriver);
			break;*/

		default:
			try {
				throw new Exception("Unhandled Execution Mode!");
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}


	public static void generateCustomReports() {

		CucumberResultsOverview overviewReports = new CucumberResultsOverview();
		overviewReports.setOutputDirectory("target/cucumber-report/");
		overviewReports.setOutputName("cucumber-results");
		overviewReports.setSourceFile("target/cucumber-report/Smoke/cucumber.json");
		try {
			overviewReports.executeFeaturesOverviewReport();
		} catch (Exception e) {
			e.printStackTrace();
		}
		}
   @After
	public void embedScreenshot(Scenario scenario) {
		ExcelReadWrite.tags.clear();
		ExcelReadWrite.testIdNumber.clear();
		ImageToPdf.ScenarioStatus(scenario);
		ImageToPdf.createPdf();
		log.info("Test case status : "+scenario.getStatus());
		log.info("\"" +scenario.getName().toString()+"\""+ " testing completed");
		WebDriver driver = DriverManager.getWebDriver();
		   SessionId session =  ((RemoteWebDriver) driver).getSessionId();
		log.info("closing all opened session of browser :"+ DriverManager.sessionSet);
		for(SessionId s: DriverManager.sessionSet ) 
		{
	   if(session.equals(s)) {
		   driver.quit();
		   log.info("closing session "+s+" of browser");
	   }
		}
   }	
		
		
//		try {
//			if (Boolean.valueOf(properties.getProperty("TrackIssuesInJira"))) {
//				updateDefectInJira(scenario);
//			}
//			if (Boolean.parseBoolean(properties.getProperty("ExecuteInMobile"))
//					&& Boolean.valueOf(properties.getProperty("PerfectoReportGeneration"))) {
//				capturePerfectoReportsForMobile(scenario);
//			}
//		} catch (Exception ex) {
//			ex.printStackTrace();
//			log.error("Problem while closing the Driver Object " + ex.getMessage());
//
//		} finally {
//
//			if (Boolean.parseBoolean(properties.getProperty("ExecuteInMobile"))) {
//				if (currentTestParameters.getExecutionMode() == ExecutionMode.SEETEST) {
//				MobileWebDriver driver = DriverManager.getSeetestDriver();
//					driver.client.releaseDevice("*", true, false, true);
//				driver.client.releaseClient();
//				driver.quit();
//			} else {
//				AppiumDriver driver = DriverManager.getAppiumDriver();
//				if (driver != null) {
//					driver.quit();
//				}
//				}
//			} else {
//				WebDriver driver = DriverManager.getWebDriver();
//				if (driver != null) {
//					capturePerfectoReportForDesktop(scenario, currentTestParameters, driver);
//					driver.quit();
//				}
//			}
//		}
		
		
	

	/**
	 * Embed a screenshot in test report if test is marked as failed And Update
	 * Task in JIRA
	 * @throws IOException 
	 */

	/*private void updateDefectInJira(Scenario scenario) throws IOException {
		if (scenario.isFailed()) {
			try {
				if (Boolean.parseBoolean(properties.getProperty("ExecuteInMobile"))) {
					if (currentTestParameters.getExecutionMode() == ExecutionMode.SEETEST) {
						
						byte[] screenshot = Util.takeScreenshot(DriverManager.getSeetestDriver());
						scenario.embed(screenshot, "image/png");
					} else {
						byte[] screenshot = Util.takeScreenshot(DriverManager.getAppiumDriver());
						scenario.embed(screenshot, "image/png");
					}
				} else {
					byte[] screenshot = Util.takeScreenshot(DriverManager.getWebDriver());
					scenario.embed(screenshot, "image/png");
				}

				File filePath = ((TakesScreenshot) DriverManager.getWebDriver()).getScreenshotAs(OutputType.FILE);
				RestApiForJira.createLog(scenario.getName(), scenario.getName(), filePath.toString());

			} catch (WebDriverException somePlatformsDontSupportScreenshots) {
				somePlatformsDontSupportScreenshots.printStackTrace();
				log.error(somePlatformsDontSupportScreenshots.getMessage());
			}
		}
	}
	private String getFileName(Browser browser, String deviceName) {
		String fileName = "";
		if (browser == null) {
			fileName = deviceName;
		} else if (deviceName == null) {
			fileName = browser.toString();
		} else {
			fileName = "report";
		}
		return fileName;
	}

	@SuppressWarnings("rawtypes")
	
	private void capturePerfectoReportsForMobile(Scenario scenario) {
		try {
			AppiumDriver driver = DriverManager.getAppiumDriver();
			driver.close();
			String Udid;

			if (!(driver.getCapabilities().getCapability("model") == null)) {
				Udid = driver.getCapabilities().getCapability("model").toString();
			} else {
				Udid = driver.getCapabilities().getCapability("deviceName").toString();
			}
			PerfectoLabUtils.downloadReport(driver, "pdf",
					Util.getResultsPath() + Util.getFileSeparator() + scenario.getName() + "_" + Udid);
		} catch (IOException e) {
			e.printStackTrace();
			log.error("Problem while downloading Perfecto Report for " + scenario.getName());

		}
	}

	private void capturePerfectoReportForDesktop(Scenario scenario, SeleniumTestParameters testParametrs,WebDriver driver) {
		if (Boolean.valueOf(properties.getProperty("PerfectoReportGeneration"))) {
			driver.close();

			Map<String, Object> params = new HashMap<String, Object>();
			((RemoteWebDriver) driver).executeScript("mobile:execution:close", params);
			params.clear();

			try {
				PerfectoLabUtils.downloadReport((RemoteWebDriver) driver, "pdf",
						Util.getResultsPath() + Util.getFileSeparator() + scenario.getName() + "_"
								+ getFileName(testParametrs.getBrowser(), testParametrs.getDeviceName()));
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	*/
	
	
	
}
	