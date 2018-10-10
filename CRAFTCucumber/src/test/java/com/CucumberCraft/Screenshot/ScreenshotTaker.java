package com.CucumberCraft.Screenshot;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.support.events.EventFiringWebDriver;


import com.CucumberCraft.supportLibraries.DriverManager;

public class ScreenshotTaker {
	static WebDriver driver=DriverManager.getWebDriver();
	static EventFiringWebDriver eventDriver=new EventFiringWebDriver(driver);
	static EventHandler handler=new EventHandler();

public static EventFiringWebDriver getScreenshot(){
	return eventDriver.register(handler);	
}

public static void takeSnapShot(WebDriver driver,String path) throws Exception{

    //Convert web driver object to TakeScreenshot

    TakesScreenshot scrShot =((TakesScreenshot)driver);

    //Call getScreenshotAs method to create image file

            File SrcFile=scrShot.getScreenshotAs(OutputType.FILE);

        //Move image file to new destination

            File DestFile=new File(path);

            //Copy file at destination

            FileUtils.copyFile(SrcFile, DestFile);

}

	

}
