package com.aa.apt.acs.response;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ListElement implements Serializable {

    private static final long serialVersionUID = 1L;

    @JsonProperty("ParentChild")
    private String parentChild;

    @JsonProperty("List")
    private String value;

    @JsonProperty("Value")
    private String trueValue;

    public String getParentChild() {
        return parentChild;
    }

    public void setParentChild(String parentChild) {
        this.parentChild = parentChild;
    }

    public String getValue() {
        // TODO - This is temp fix till LSCS correct the JSON key names as suggested to them.
        if (value == null) {
            value = trueValue;
        }
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getTrueValue() {
        // TODO - This is temp fix till LSCS correct the JSON key names as suggested to them.
        if (trueValue == null) {
            trueValue = value;
        }
        return trueValue;
    }

    public void setTrueValue(String trueValue) {
        this.trueValue = trueValue;
    }

}
