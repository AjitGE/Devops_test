package com.aa.apt.acs.response;

import java.io.Serializable;

public class LscsTrackerCard implements Serializable {
    private static final long serialVersionUID = 7239968222473539783L;
    private String trackingCode;
    private String trackingElement;

    public String getTrackingCode() {
        return trackingCode;
    }

    public String getTrackingElement() {
        return trackingElement;
    }

    //setters can go away once I get responses from a real service?
    public void setTrackingCode(String trackingCode) {
        this.trackingCode = trackingCode;
    }

    public void setTrackingElement(String trackingElement) {
        this.trackingElement = trackingElement;
    }
}
