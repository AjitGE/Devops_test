package com.aa.apt.ventana.response;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "PromoSearchResultItem"
})

public class PromoSearchResult implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = -929042887526453851L;
	
	@JsonProperty("PromoSearchResultItem")
    @JsonFormat(with = JsonFormat.Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
    private List<PromoSearchResultItem> promoSearchResultItem = null;

    @JsonProperty("PromoSearchResultItem")
    public List<PromoSearchResultItem> getPromoSearchResultItem() {
        return promoSearchResultItem;
    }

    @JsonProperty("PromoSearchResultItem")
    public void setPromoSearchResultItem(List<PromoSearchResultItem> promoSearchResultItem) {
        this.promoSearchResultItem = promoSearchResultItem;
    }

}
