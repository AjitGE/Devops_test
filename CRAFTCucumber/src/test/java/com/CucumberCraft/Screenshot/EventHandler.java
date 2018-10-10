package com.CucumberCraft.Screenshot;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.events.WebDriverEventListener;
import com.CucumberCraft.stepDefinitions.MasterStepDefs;
import com.CucumberCraft.supportLibraries.Util;


public class EventHandler extends MasterStepDefs  implements WebDriverEventListener{
	
	@Override
	public void afterAlertAccept(WebDriver arg0) {
		
		currentScenario.embed(Util.takeScreenshot (arg0),
				"image/png");		
		
	}

	@Override
	public void afterAlertDismiss(WebDriver arg0) {
		currentScenario.embed(Util.takeScreenshot (arg0),
				"image/png");		
	}

	@Override
	public void afterChangeValueOf(WebElement arg0, WebDriver arg1, CharSequence[] arg2) {
		currentScenario.embed(Util.takeScreenshot (arg1),
				"image/png");	
		
	}

	@Override
	public void afterClickOn(WebElement arg0, WebDriver arg1) {

		currentScenario.embed(Util.takeScreenshot (arg1),
				"image/png");
	}

	@Override
	public void afterFindBy(By arg0, WebElement arg1, WebDriver arg2) {
		
		currentScenario.embed(Util.takeScreenshot (arg2),
				"image/png");

	}

	@Override
	public void afterNavigateBack(WebDriver arg0) {
		currentScenario.embed(Util.takeScreenshot (arg0),
				"image/png");
		
	}

	@Override
	public void afterNavigateForward(WebDriver arg0) {
		currentScenario.embed(Util.takeScreenshot (arg0),
				"image/png");
		
	}

	@Override
	public void afterNavigateRefresh(WebDriver arg0) {
		currentScenario.embed(Util.takeScreenshot (arg0),
				"image/png");
		
	}

	@Override
	public void afterNavigateTo(String arg0, WebDriver arg1) {
		// TODO Auto-generated method stub
		currentScenario.embed(Util.takeScreenshot (arg1),
				"image/png");	
	}

	@Override
	public void afterScript(String arg0, WebDriver arg1) {
		currentScenario.embed(Util.takeScreenshot (arg1),
				"image/png");
		
	}

	@Override
	public void beforeAlertAccept(WebDriver arg0) {
		currentScenario.embed(Util.takeScreenshot (arg0),
				"image/png");
		
	}

	@Override
	public void beforeAlertDismiss(WebDriver arg0) {
		currentScenario.embed(Util.takeScreenshot (arg0),
				"image/png");
		
	}

	@Override
	public void beforeChangeValueOf(WebElement arg0, WebDriver arg1, CharSequence[] arg2) {
	
		currentScenario.embed(Util.takeScreenshot (arg1),
				"image/png");
	}

	@Override
	public void beforeClickOn(WebElement arg0, WebDriver arg1) {
		// TODO Auto-generated method stub
		
		currentScenario.embed(Util.takeScreenshot (arg1),
				"image/png");
		
	}

	@Override
	public void beforeFindBy(By arg0, WebElement arg1, WebDriver arg2) {
		
		currentScenario.embed(Util.takeScreenshot (arg2),
				"image/png");
	}

	@Override
	public void beforeNavigateBack(WebDriver arg0) {
		currentScenario.embed(Util.takeScreenshot (arg0),
				"image/png");
	}

	@Override
	public void beforeNavigateForward(WebDriver arg0) {
		currentScenario.embed(Util.takeScreenshot (arg0),
				"image/png");
	}

	@Override
	public void beforeNavigateRefresh(WebDriver arg0) {
		currentScenario.embed(Util.takeScreenshot (arg0),
				"image/png");	
	}

	@Override
	public void beforeNavigateTo(String arg0, WebDriver arg1) {
		currentScenario.embed(Util.takeScreenshot (arg1),
				"image/png");
	}

	@Override
	public void beforeScript(String arg0, WebDriver arg1) {
		currentScenario.embed(Util.takeScreenshot (arg1),
				"image/png");
	}

	@Override
	public void onException(Throwable arg0, WebDriver arg1) {
		currentScenario.embed(Util.takeScreenshot (arg1),
				"image/png");	
		
	}


}
