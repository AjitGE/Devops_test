package com.CucumberCraft.Screenshot;

import java.io.File;

import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Iterator;
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
   // private static Font catFont = new Font(Font.FontFamily.TIMES_ROMAN, 18,Font.BOLD);
    private static Font redFont = new Font(Font.FontFamily.TIMES_ROMAN, 18,
            Font.NORMAL, BaseColor.RED);
    private static Font greenFont = new Font(Font.FontFamily.TIMES_ROMAN, 18,
            Font.NORMAL, BaseColor.GREEN);
   // private static Font subFont = new Font(Font.FontFamily.TIMES_ROMAN, 16, Font.BOLD);
    //private static Font smallBold = new Font(Font.FontFamily.TIMES_ROMAN, 12,Font.BOLD);
	
	public static void createPdf() {
        try {
        	
        	 Path fPath=Paths.get(path);
            Document document = new Document();
            pdfPath=fPath.toAbsolutePath().toString()+"\\screenshot\\"+tags.get(0).replace("@","")+"_"+Util.getCurrentTime().toString().replace(" ","_").replace(":","_")+".pdf";
            PdfWriter.getInstance(document, new FileOutputStream(pdfPath));
            document.open();
            addTitlePage(document);
            addStepText(document);
            addImage(document);
           
            document.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
	private static void addImage(Document document) throws MalformedURLException, IOException, DocumentException {
		 Path fPath=Paths.get(path);
		for (int i=0; i<noOfPng(); i++)
		{
				String IMG = fPath.toAbsolutePath().toString()+"\\smoke\\embedded"+i+".png"; 
	      //Creating an Image object
	      Image image = Image.getInstance(IMG) ;   
          image.scaleToFit(500,500);
	      document.add(image);  
	      System.out.println("Image Added");
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
			 File folder = new File(fPath.toAbsolutePath().toString()+"\\smoke\\");
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
		public static void freespace() {
			Path fPath=Paths.get(path);
			 File folder = new File(fPath.toAbsolutePath().toString()+"\\screenshot\\");
			 File[] listFiles = folder.listFiles();
				for(File file : listFiles){
					System.out.println("Deleting "+file.getName());
					file.delete();
				}
          
			
		}

		 
   
	
	
}


