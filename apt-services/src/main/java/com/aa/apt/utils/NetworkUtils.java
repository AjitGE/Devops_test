package com.aa.apt.utils;

import org.apache.commons.codec.binary.Base64;
import org.springframework.http.HttpHeaders;

public class NetworkUtils {

    public static void addBasicAuth(HttpHeaders headers, String basicAuthToken) {
        headers.add("Authorization", basicAuthToken);
    }

    public static String generateBasicAuthToken(String username, String password) {
        String apiAuthString = username + ":" + password;
        byte[] apiAuthStringBytes = apiAuthString.getBytes();
        byte[] encodedApiAuthBytes = Base64.encodeBase64(apiAuthStringBytes);
        return "Basic " + new String(encodedApiAuthBytes);
    }
    
    private NetworkUtils() {
        throw new IllegalStateException("Network Utility class");
      }
}
