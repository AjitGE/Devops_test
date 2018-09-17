package com.aa.apt.ventana.response;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class VentanaResponse implements Serializable{
	
	private static final long serialVersionUID = 8762312222569484812L;
	
	@JsonProperty("PromoSearchResponse")
	private PromoSearchResponse promoSearchResponse;

	public PromoSearchResponse getPromoSearchResponse() {
		return promoSearchResponse;
	}

	public void setPromoSearchResponse(PromoSearchResponse promoSearchResponse) {
		this.promoSearchResponse = promoSearchResponse;
	}
	

}