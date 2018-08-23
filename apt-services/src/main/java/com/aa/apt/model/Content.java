package com.aa.apt.aptservices.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "PromotionOrChallengeCode",
    "IsTrending",
    "Keyword"
})

@JsonIgnoreProperties(ignoreUnknown = true)
public class Content {
	
	@JsonProperty("PromotionOrChallengeCode")
    private String promotionOrChallengeCode;
    @JsonProperty("IsTrending")
    private String isTrending;
    @JsonProperty("Keyword")
    private String keyword;
    
    @JsonProperty("PromotionOrChallengeCode")
    public String getPromotionOrChallengeCode() {
        return promotionOrChallengeCode;
    }

    @JsonProperty("PromotionOrChallengeCode")
    public void setPromotionOrChallengeCode(String promotionOrChallengeCode) {
        this.promotionOrChallengeCode = promotionOrChallengeCode;
    }

    @JsonProperty("Keyword")
    public String getKeyword() {
        return keyword;
    }

    @JsonProperty("Keyword")
    public void setPromotionName(String keyword) {
        this.keyword = keyword;
    }

    @JsonProperty("isTrending")
    public String getIsTrending() {
        return isTrending;
    }

    @JsonProperty("isTrending")
    public void setShortDescription(String isTrending) {
        this.isTrending = isTrending;
    }

    	
	@Override
    public String toString() {
		return "Content{" +
				"PromotionOrChallengeCode='" + promotionOrChallengeCode + 
				",isTrending = "+isTrending +
				",keyword = "+keyword +'\'' +
				
				'}';
	}

}
