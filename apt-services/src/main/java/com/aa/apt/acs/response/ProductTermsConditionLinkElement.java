package com.aa.apt.acs.response;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProductTermsConditionLinkElement implements Serializable {

    private static final long serialVersionUID = -9086745705702380470L;

    @JsonProperty("External")
    private String external;

    @JsonProperty("Url")
    private String url;

    @JsonProperty("LinkText")
    private String linkText;

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

    public String getLinkText() {
        return linkText;
    }

    public void setLinkText(String linkText) {
        this.linkText = linkText;
    }

}
