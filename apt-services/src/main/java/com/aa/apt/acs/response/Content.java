package com.aa.apt.acs.response;

import java.io.Serializable;
import java.util.Collections;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Content implements Serializable {

    private static final long serialVersionUID = 8762302222567484811L;

    @JsonProperty("PromotionOrChallengeCode")
    private String promotionOrChallengeCode;
    
    @JsonProperty("IsTrending")
    private String isTrending;
    
    @JsonProperty("Keyword")
    private String keyword;
    
    @JsonProperty("IsRegistrationRequire")
    private String isRegistrationRequire;
    
    @JsonProperty("IsTargetedPromotion")
    private String isTargetedPromotion;

	public String getPromotionOrChallengeCode() {
		return promotionOrChallengeCode;
	}

	public void setPromotionOrChallengeCode(String promotionOrChallengeCode) {
		this.promotionOrChallengeCode = promotionOrChallengeCode;
	}

	public String getIsTrending() {
		return isTrending;
	}

	public void setIsTrending(String isTrending) {
		this.isTrending = isTrending;
	}

	public String getKeyword() {
		return keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}

	public String getIsRegistrationRequire() {
		return isRegistrationRequire;
	}

	public void setIsRegistrationRequire(String isRegistrationRequire) {
		this.isRegistrationRequire = isRegistrationRequire;
	}

	public String getIsTargetedPromotion() {
		return isTargetedPromotion;
	}

	public void setIsTargetedPromotion(String isTargetedPromotion) {
		this.isTargetedPromotion = isTargetedPromotion;
	}

}
