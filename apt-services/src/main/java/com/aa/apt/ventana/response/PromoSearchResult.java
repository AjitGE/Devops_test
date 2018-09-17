package com.aa.apt.ventana.response;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "PromoSearchResultItem"
})

public class PromoSearchResult {

    @JsonProperty("PromoSearchResultItem")
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
