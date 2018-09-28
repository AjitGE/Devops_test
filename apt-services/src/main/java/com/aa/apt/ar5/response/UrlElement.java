package com.aa.apt.ar5.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class UrlElement extends LSCSReplicantElement {
    
    private static final long serialVersionUID = -2273425557302670795L;

    @JsonProperty("TextDisplay")
    private String displayText;
    
    @JsonProperty("AltText")
    private String altText;
    
    @JsonProperty("External")
    private String external;
    
    @JsonProperty("Url")
    private String url;
    
    public String getDisplayText() {
        return displayText;
    }
    public void setDisplayText(String displayText) {
        this.displayText = displayText;
    }
    public String getAltText() {
        return altText;
    }
    public void setAltText(String altText) {
        this.altText = altText;
    }
    public String getExternal() {
        return external;
    }
    public void setExternal(String external) {
        this.external = external;
    }
    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }
   

}
