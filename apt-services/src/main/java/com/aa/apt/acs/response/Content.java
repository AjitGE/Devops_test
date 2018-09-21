package com.aa.apt.acs.response;

import java.io.Serializable;
import java.util.Collections;
import java.util.List;

import com.aa.apt.ar5.response.LSCSReplicantElement;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Content implements Serializable {

    private static final long serialVersionUID = 8762302222567484811L;

    @JsonProperty("PromotionOrChallengeCode")
    private String promotionOrChallengeCode;
    
    @JsonProperty("IsTrending")
    private String isTrending;
    
    @JsonProperty("KeyWords")
    private String keywords;

	@JsonProperty("IsMemberRegistration")
    private String isMemberRegistration;
    
    @JsonProperty("TargetedPromotion")
    private String targetedPromotion;
    
    @JsonProperty("HowToEarn")
    private List<LSCSReplicantElement> howToEarn = Collections.emptyList();
    
    @JsonProperty("Fulfillment")
    private List<LSCSReplicantElement> fulfillment = Collections.emptyList();
    
    @JsonProperty("ResolveIssues")
    private List<LSCSReplicantElement> resolveIssues = Collections.emptyList();
    
    @JsonProperty("PartnerCodes")
    private String[] partnerCodes;
    
    @JsonProperty("Communications")
    private List<Communications> communications = Collections.emptyList();

	public List<LSCSReplicantElement> getHowToEarn() {
		return howToEarn;
	}

	public void setHowToEarn(List<LSCSReplicantElement> howToEarn) {
		this.howToEarn = howToEarn;
	}

	public List<LSCSReplicantElement> getFulfillment() {
		return fulfillment;
	}

	public void setFulfillment(List<LSCSReplicantElement> fulfillment) {
		this.fulfillment = fulfillment;
	}

	public List<LSCSReplicantElement> getResolveIssues() {
		return resolveIssues;
	}

	public void setResolveIssues(List<LSCSReplicantElement> resolveIssues) {
		this.resolveIssues = resolveIssues;
	}

	public String[] getPartnerCodes() {
		return partnerCodes;
	}

	public void setPartnerCodes(String[] partnerCodes) {
		this.partnerCodes = partnerCodes;
	}

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
	
	public String getKeywords() {
		return keywords;
	}

	public void setKeywords(String keywords) {
		this.keywords = keywords;
	}

	public String getIsMemberRegistration() {
		return isMemberRegistration;
	}

	public void setIsMemberRegistration(String isMemberRegistration) {
		this.isMemberRegistration = isMemberRegistration;
	}

	public String getTargetedPromotion() {
		return targetedPromotion;
	}

	public void setTargetedPromotion(String targetedPromotion) {
		this.targetedPromotion = targetedPromotion;
	}

		
	public void setCommunications(List<Communications> communications) {
		this.communications = communications;
	}
	
	public List<Communications> getCommunications() {
		return communications;
	}

}
