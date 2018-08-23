package com.aa.apt.acs.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TermsAndConditionsUrl extends LSCSReplicantElement {

    private static final long serialVersionUID = 1L;

    @JsonProperty("TextDisplay")
    private String textDisplay;

    @JsonProperty("AltText")
    private String altText;

    @JsonProperty("Url")
    private String url;
    
    @JsonProperty("External")
    private String external;

    public String getTextDisplay() {
        return textDisplay;
    }

    public void setTextDisplay(String textDisplay) {
        this.textDisplay = textDisplay;
    }

    public String getAltText() {
        return altText;
    }

    public void setAltText(String altText) {
        this.altText = altText;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getExternal() {
        return external;
    }

    public void setExternal(String external) {
        this.external = external;
    }

}
