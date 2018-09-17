package com.aa.apt.ventana.response;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "ResponseStatus",
    "PromoSearchResult"
})
public class PromoSearchResponse {

    @JsonProperty("ResponseStatus")
    private ResponseStatus responseStatus;
    
    @JsonProperty("PromoSearchResult")
    private List<PromoSearchResult> promoSearchResult = null;

    @JsonProperty("ResponseStatus")
    public ResponseStatus getResponseStatus() {
        return responseStatus;
    }

    @JsonProperty("ResponseStatus")
    public void setResponseStatus(ResponseStatus responseStatus) {
        this.responseStatus = responseStatus;
    }

    @JsonProperty("PromoSearchResult")
    public List<PromoSearchResult> getPromoSearchResult() {
        return promoSearchResult;
    }

    @JsonProperty("PromoSearchResult")
    public void setPromoSearchResult(List<PromoSearchResult> promoSearchResult) {
        this.promoSearchResult = promoSearchResult;
    }

}