package com.aa.apt.acs.response;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MarketingPageUrl implements Serializable{
	
	private static final long serialVersionUID = 8762312222567484811L;
	
	@JsonProperty("TextDisplay")
	private String textDisplay;
	
	@JsonProperty("Url")
	private String url;
	
	public String getTextDisplay() {
		return textDisplay;
	}

	public void setTextDisplay(String textDisplay) {
		this.textDisplay = textDisplay;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}
