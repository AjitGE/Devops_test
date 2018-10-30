package com.CucumberCraft.Screenshot;

import java.io.File;

import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import org.apache.log4j.Logger;
import com.CucumberCraft.supportLibraries.SeleniumTestParameters;
import com.CucumberCraft.supportLibraries.Util;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Font;
import com.itextpdf.text.Image;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;

import cucumber.api.Scenario;

public class ImageToPdf {
	static ArrayList<String> tags= new ArrayList<String>();
	private static String path = Util.getTargetPath();
	static Scenario scenario;
	static String pdfPath;
	public static String restResponse;
	
	int max;
    int min;
    static SeleniumTestParameters testparameters =new SeleniumTestParameters();
static Logger log;
	

	static {
		log = Logger.getLogger(ImageToPdf.class);
	}
	
   // private static Font catFont = new Font(Font.FontFamily.TIMES_ROMAN, 18,Font.BOLD);
    private static Font redFont = new Font(Font.FontFamily.TIMES_ROMAN, 18,
            Font.NORMAL, BaseColor.RED);
    private static Font greenFont = new Font(Font.FontFamily.TIMES_ROMAN, 18,
            Font.NORMAL, BaseColor.GREEN);
    private static Font subFont = new Font(Font.FontFamily.TIMES_ROMAN, 16, Font.BOLD);
    private static Font smallBold = new Font(Font.FontFamily.TIMES_ROMAN, 12,Font.BOLD);

	public static void createPdf() {
		   System.out.println("path:"+path );
        try {
        	log.warn("pdf creation is in progress .....");
        	
        	 Path fPath=Paths.get(path);
            Document document = new Document();
            for(String tag: tags) {
            	if(tag.startsWith("@TestId")) { 		 		
            pdfPath=fPath.toAbsolutePath().toString()+Util.getFileSeparator()+"screenshot"+Util.getFileSeparator()+tag.replace("@","")+"_"+Util.getCurrentTime().toString().replace(" ","_").replace(":","_")+".pdf";
            System.out.println("pdfPath:"+pdfPath );
            }
            }
            ImageToPdf i=new ImageToPdf();
            PdfWriter.getInstance(document, new FileOutputStream(pdfPath));
            document.open();
            addTitlePage(document);
            addStepText(document);
            AddResponseToPdf(document);
            i.addImage(document);
            
            
          
           
            document.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        log.warn("Created test pdf for test case: "+scenario.getName());
    }
	private  void addImage(Document document) throws MalformedURLException, IOException, DocumentException {
		 Path fPath=Paths.get(path);
		 Paragraph preface = new Paragraph();
		 addEmptyLine(preface, 1);
		 preface.add(new Paragraph("Screenshots : ",subFont));
		 System.out.println("path in add image:"+path );
		 
		if(noOfPng()>0) {
		for (int i=getEmbeddedImageMin(); i<=getEmbeddedImageMax() ; i++)
		{
			String IMG = fPath.toAbsolutePath().toString()+Util.getFileSeparator()+"Smoke"+Util.getFileSeparator()+"embedded"+i+".png"; 
  
	      //Creating an Image object
			
	      Image image = Image.getInstance(IMG) ;   
          image.scaleToFit(500,500);
          document.add(preface);
	      document.add(image); 
	     
		}
		 log.info("Created pdf file of the test screenshot check the \"Result folder\" in the project");
	      }
		else {
			log.info("No screenshot !! No pdf :)");
		}
			
	      
		
		
		
	}



	private static void addTitlePage(Document document) throws DocumentException {
		Paragraph preface = new Paragraph();
        addEmptyLine(preface, 1);
        preface.add(new Paragraph("Scenario Name:"+(scenario.getName())));
        addEmptyLine(preface, 1);
        document.add(preface);
        // Start a new page
       
		
	}

	private static void addStepText(Document document) throws DocumentException {
		// TODO Auto-generated method stub
		Paragraph preface = new Paragraph();
		if(scenario.isFailed()){
		preface.add(new Paragraph("Test case: "+(scenario.getStatus()),redFont));
		}
		else{
			preface.add(new Paragraph("Test case status: "+(scenario.getStatus()),greenFont));
		}
		document.add(preface);
	}

	private static void addEmptyLine(Paragraph paragraph, int number) {
		 for (int i = 0; i < number; i++) {
	            paragraph.add(new Paragraph(" "));
		
	}
}
	public static void ScenarioStatus(Scenario scenario) {
		ImageToPdf.scenario=scenario;
		Iterator<String> s;
		s=ImageToPdf.scenario.getSourceTagNames().iterator();
		 while(s.hasNext()){
			 String tag=s.next();
		 tags.add(tag);
		 }
	}
		 
		 static int noOfPng(){
			 Path fPath=Paths.get(path);
			 File folder = new File(fPath.toAbsolutePath().toString()+Util.getFileSeparator()+"Smoke"); 
	    		
		 String[] fileNames = folder.list();
		 
		 int total = 0;
		 for (int i = 0; i< fileNames.length; i++)
		 {
		   if (fileNames[i].contains(".png"))
		     {
		       total++;
		      }
		   }
		return total;
		 }
		 
		 static int getEmbeddedImageMax() {
			 Path fPath=Paths.get(path);
			 int number;
			 File folder = new File(fPath.toAbsolutePath().toString()+Util.getFileSeparator()+"Smoke"); 
			 String[] fileNames = folder.list();
			 ImageToPdf i=new ImageToPdf();
			for(String file : fileNames) {
			     if(file.endsWith(".png")) {
			    	 String[] names=file.split("embedded");
			    	 String[] name=names[1] .split(".png");
			    	 number=Integer.valueOf(name[0]);
			    	  i.max=Math.max(i.max, number);
			    	 }
			    
			     }
			 
			
          
			 
			return i.max;
			 
		 }
		 
		 static int getEmbeddedImageMin() {
			 Path fPath=Paths.get(path);
			 File folder = new File(fPath.toAbsolutePath().toString()+Util.getFileSeparator()+"Smoke"); 
			 String[] fileNames = folder.list();
			 Arrays.sort(fileNames);
			 ImageToPdf i=new ImageToPdf();
			for(String file : fileNames) {
			     if(file.endsWith(".png")) {
			    	 String[] names=file.split("embedded");
			    		String[] name=names[1] .split(".png");
			    	 i.min=Integer.valueOf(name[0]);
			    	break;
			    	 
			    	 }
			     }
			 
			
          
			 
			return i.min;
			 
		 }
		public static void freeSmokePng() {
		
			File cucumberReportSmoke= new File(Util.getTargetPath()+Util.getFileSeparator()+"Smoke");
			
			
			try{
				 File[] listofAllFile = cucumberReportSmoke.listFiles();
				 for(File file : listofAllFile) {
			     if(file.getName().endsWith(".png")) 
				     {
				      file.delete();
				     }
			      }
				 }
				 catch(Exception e) {
					    e.getMessage();
					 }
		}
			public static void freeScreenshotFolder() {
				Path fPath=Paths.get(path);
				 File folder = new File(fPath.toAbsolutePath().toString()+Util.getFileSeparator()+"screenshot");
			 try {
			 File[] listFiles = folder.listFiles();
				for(File file : listFiles){
					 
						 file.delete();
						 
					
				} }
			catch(Exception e) {
					    e.getMessage();
					 }
				}
			public static void AddResponseToPdf(Document document) throws DocumentException  {
				if(restResponse!=null){
					Paragraph preface = new Paragraph();
					addEmptyLine(preface, 1);
			 preface.add(new Paragraph("Body of rest call : ",subFont));
			 preface.add(new Paragraph(restResponse,smallBold));
				document.add(preface);
				}	
				else {
					Paragraph preface = new Paragraph();
					addEmptyLine(preface, 1);
					preface.add(new Paragraph("Body of rest call : Service call failed!! nothing to display"));
					document.add(preface);
				}
			}
				
}
			

			
		

		 
   
	
	


