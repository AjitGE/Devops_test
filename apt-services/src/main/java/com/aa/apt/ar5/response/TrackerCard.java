package com.aa.apt.ar5.response;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TrackerCard implements Serializable {

    private static final long serialVersionUID = 7430701434611640873L;

    @JsonProperty("TrackingCode")
    private String trackingCode;

    @JsonProperty("TrackingElement")
    private String trackingElement;

    @JsonProperty("TrackingPlaceHolder")
    private String trackingPlaceHolder;

    public String getTrackingCode() {
        return trackingCode;
    }

    public String getTrackingElement() {
        return trackingElement;
    }

    public String getTrackingPlaceHolder() {
        return trackingPlaceHolder;
    }

    //setters can go away when mocks go away.
    public void setTrackingCode(String trackingCode) {
        this.trackingCode = trackingCode;
    }

    public void setTrackingElement(String trackingElement) {
        this.trackingElement = trackingElement;
    }

    public void setTrackingPlaceHolder(String trackingPlaceHolder) {
        this.trackingPlaceHolder = trackingPlaceHolder;
    }
}
