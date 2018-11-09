package com.CucumberCraft.TestNGrunners;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;

import com.CucumberCraft.Screenshot.ImageToPdf;


import com.CucumberCraft.supportLibraries.TimeStamp;
import com.CucumberCraft.supportLibraries.Util;
import com.github.mkolisnyk.cucumber.reporting.CucumberDetailedResults;
import com.github.mkolisnyk.cucumber.reporting.CucumberResultsOverview;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import com.vimalselvam.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.testng.AbstractTestNGCucumberTests;



@ExtendedCucumberOptions(jsonReport = "target/cucumber-report/Report/cucumber.json", 
jsonUsageReport = "target/cucumber-report/Report/cucumber-usage.json", 
outputFolder = "target/cucumber-report/Report", 
detailedReport = true, 
detailedAggregatedReport = true, 
overviewReport = true, 
usageReport = true)

/**
* Please notice that com.CucumberCraft.stepDefinations.CukeHooks class
* is in the same package as the steps definitions.
* It has two methods that are executed before or after scenario.
* I'm using to take a screenshot if scenario fails.
*/
@CucumberOptions(features = "src/test/resources/features", 
glue = { "com.CucumberCraft.stepDefinitions" }, 
tags = { "@UserStory"},
monochrome = true,
plugin = {
    
	"pretty", 
	"pretty:target/cucumber-report/screenshot/pretty.txt",
	"html:target/cucumber-report/Report",
	"json:target/cucumber-report/Report/cucumber.json",
	"junit:target/cucumber-report/Report/cucumber-junitreport.xml",
	"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/cucumber-report/Report/report.html"})



public class RunCucumberTests_Report extends AbstractTestNGCucumberTests {
	
	
final static String timeStampResultPath = TimeStamp.getInstance();
final static File destCucumber = new File(timeStampResultPath);
Scenario scenario;
static Logger log;


static {
	
	log = Logger.getLogger(RunCucumberTests_Report.class);
}


	
@AfterTest
private void test() throws IOException {
	
        Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
        /*Properties p = System.getProperties();
        p.list(System.out);*/
        
        Reporter.setSystemInfo("User Name",System.getProperty("user.name"));
        Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
        Reporter.setSystemInfo("64 Bit", "Windows 10");
        Reporter.setSystemInfo("3.7.1", "Selenium");
        Reporter.setSystemInfo("3.3.9", "Maven");
        Reporter.setSystemInfo("1.8.0_141", "Java Version");
        Reporter.setTestRunnerOutput("Cucumber JUnit Test Runner");
	log.info("generating aggregate report for the scenario please check the \"Results Folder\"");
	generateCustomReports();
	log.info("generating aggregate report for the scenario please check the \"Results Folder\"");
	FreeSpaceinTargetFolder();
	copyReportsAndPdfFolder();
	compress();
	log.info("generating aggregate report for the scenario please check the \"Results Folder\"");
	ImageToPdf.freeScreenshotFolder();
    
	
	}

private void generateCustomReports() {
	
	CucumberResultsOverview results1 = new CucumberResultsOverview();
	results1.setOutputDirectory("target");
	results1.setOutputName("cucumber-results");
	results1.setSourceFile("target/cucumber-report/Report/cucumber.json");
	try {
		results1.executeFeaturesOverviewReport();
	} catch (Exception e) {
		e.printStackTrace();
	}
	
	CucumberDetailedResults detailedResults = new CucumberDetailedResults();
    detailedResults.setOutputDirectory("target");
    detailedResults.setOutputName("cucumber-results");
    detailedResults.setSourceFile("target/cucumber-report/Report/cucumber.json");
    detailedResults.setScreenShotLocation("./screenshot");
    try {
           detailedResults.executeDetailedResultsReport(false, true);
    } catch (Exception e) {

           e.printStackTrace();
    }
}	



public static void copyReportsAndPdfFolder() {

	
	File sourceCucumber = new File(Util.getTargetPath());
	ImageToPdf.freeReportPng();
	 
	 try {
			FileUtils.copyDirectory(sourceCucumber, destCucumber);
		} catch (IOException e) {
			e.printStackTrace();
		}
	 
		 
}
public static void FreeSpaceinTargetFolder() throws IOException {

	File SourceAggregateReport= new File((Util.getTargetPath().replace("cucumber-report", "")));
	File ResultFolderZip= new File((Util.getResultsPath()));
	
	 
	 
	 
	 try{
		 File[] listofAllFile = SourceAggregateReport.listFiles();
		 for(File file : listofAllFile) {
	     
		      file.delete();
		     
	      }
		 }
		 catch(Exception e) {
			    e.getMessage();
			 }
	 try{
		 File[] listofAllFile = ResultFolderZip.listFiles();
		 for(File file : listofAllFile) {
	     if(file.getName().endsWith(".zip")) 
		     {
		      file.delete();
		     }
	      }
		 }
		 catch(Exception e) {
			    e.getMessage();
			 }
}
	 public static void compress() {
         Path sourceDir = Paths.get(timeStampResultPath);
         String zipFileName = timeStampResultPath.concat(".zip");
         try {
             ZipOutputStream outputStream = new ZipOutputStream(new FileOutputStream(zipFileName));
             Files.walkFileTree(sourceDir, new SimpleFileVisitor<Path>() {
                 @Override
                 public FileVisitResult visitFile(Path file, BasicFileAttributes attributes) {
                     try {
                         Path targetFile = sourceDir.relativize(file);
                         outputStream.putNextEntry(new ZipEntry(targetFile.toString()));
                         byte[] bytes = Files.readAllBytes(file);
                         outputStream.write(bytes, 0, bytes.length);
                         outputStream.closeEntry();
                     } catch (IOException e) {
                         e.printStackTrace();
                     }
                     return FileVisitResult.CONTINUE;
                 }
             });
             outputStream.close();
         } catch (IOException e) {
             e.printStackTrace();
         }
     }




	    

@AfterSuite
	 public static void AfterSuite() {
         
     }

}
