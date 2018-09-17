package com.aa.apt.acs.response;

import java.io.Serializable;
import java.util.Collections;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Communications implements Serializable{
	
	private static final long serialVersionUID = 8772302222567484811L;
	
	
	@JsonProperty("IsDirectMailer")
    private String isDirectMailer;
	
	@JsonProperty("Email")
    private List<Email> email = Collections.emptyList();
	
	@JsonProperty("MarketingPageUrl")
    private List<MarketingPageUrl> marketingPageUrl = Collections.emptyList();
	
	public String getIsDirectMailer() {
		return isDirectMailer;
	}

	public void setIsDirectMailer(String isDirectMailer) {
		this.isDirectMailer = isDirectMailer;
	}

	public List<Email> getEmail() {
		return email;
	}

	public void setEmail(List<Email> email) {
		this.email = email;
	}

	public List<MarketingPageUrl> getMarketingPageUrl() {
		return marketingPageUrl;
	}

	public void setMarketingPageUrl(List<MarketingPageUrl> marketingPageUrl) {
		this.marketingPageUrl = marketingPageUrl;
	}


}
