package com.aa.apt.ar5.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class HeaderElement extends LSCSReplicantElement {
    
    private static final long serialVersionUID = -6026069023726165727L;
    @JsonProperty("Value")
    private String value;
    
    public String getValue() {
        return value;
    }
    public void setValue(String value) {
        this.value = value;
    }

}
