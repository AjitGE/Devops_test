package com.aa.apt.ventana.response;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "ResponseStatus",
    "PromoSearchResult"
})
public class PromoSearchResponse implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 8592788134135539305L;

	@JsonProperty("ResponseStatus")
    private ResponseStatus responseStatus;
    
    @JsonProperty("PromoSearchResult")
    private PromoSearchResult promoSearchResult = null;

    @JsonProperty("ResponseStatus")
    public ResponseStatus getResponseStatus() {
        return responseStatus;
    }

    @JsonProperty("ResponseStatus")
    public void setResponseStatus(ResponseStatus responseStatus) {
        this.responseStatus = responseStatus;
    }

    @JsonProperty("PromoSearchResult")
    public PromoSearchResult getPromoSearchResult() {
        return promoSearchResult;
    }

    @JsonProperty("PromoSearchResult")
    public void setPromoSearchResult(PromoSearchResult promoSearchResult) {
        this.promoSearchResult = promoSearchResult;
    }

}