package com.aa.apt.utils;

import java.io.File;
import java.io.IOException;
import java.net.URL;


public class FileUtils {

    @SuppressWarnings("deprecation")
	public static String getResourceToString(String resourceFilePath) throws IOException {
        return org.apache.commons.io.FileUtils.readFileToString(getResourceToFile(resourceFilePath));
    }

    public static File getResourceToFile(String resourceFilePath) throws IOException {
        ClassLoader classLoader = FileUtils.class.getClassLoader();
        URL resource = classLoader.getResource(resourceFilePath);
        File file = new File(resource.getPath());
        return file;
    }
    
    private FileUtils() {
        throw new IllegalStateException("File Utility class");
      }
}
