package com.aa.apt.ar5.response;

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

    @JsonProperty("PromotionName")
    private String promotionName;

    @JsonProperty("ShortDescription")
    private String shortDescription;

    @JsonProperty("HighResolutionImage")
    private String highResolutionImage;

    @JsonProperty("LowResolutionImage")
    private String lowResolutionImage;

    @JsonProperty("TrackerCard")
    private List<TrackerCard> trackerCardList = Collections.emptyList();

    @JsonProperty("RewardsUponRegistration")
    private List<RewardsUponRegistration> rewardsUponRegistrationList = Collections.emptyList();

    @JsonProperty("MainContent")
    private List<LSCSReplicantElement> mainContent = Collections.emptyList();
    
    @JsonProperty("TermsAndConditions")
    private List<LSCSReplicantElement> termsAndConditions = Collections.emptyList();
    
    @JsonProperty("CompletionMessage")
    private List<CompletionMessage> completionMessage = Collections.emptyList();

    @JsonProperty("ProductTermsCondition")
    private List<ProductTermsCondition> productTermsConditionList;

    public String getPromotionOrChallengeCode() {
        return promotionOrChallengeCode;
    }

    public String getPromotionName() {
        return promotionName;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public String getHighResolutionImage() {
        return highResolutionImage;
    }

    public String getLowResolutionImage() {
        return lowResolutionImage;
    }

    public List<TrackerCard> getTrackerCardList() {
        return trackerCardList;
    }

    public List<RewardsUponRegistration> getRewardsUponRegistrationList() {
        return rewardsUponRegistrationList;
    }

    public List<LSCSReplicantElement> getMainContent() {
        return mainContent;
    }

    public List<LSCSReplicantElement> getTermsAndConditions() {
        return termsAndConditions;
    }

    public List<CompletionMessage> getCompletionMessage() {
        return completionMessage;
    }

    // setters can go away when mocks go away

    public void setPromotionOrChallengeCode(String promotionOrChallengeCode) {
        this.promotionOrChallengeCode = promotionOrChallengeCode;
    }

    public void setPromotionName(String promotionName) {
        this.promotionName = promotionName;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public void setHighResolutionImage(String highResolutionImage) {
        this.highResolutionImage = highResolutionImage;
    }

    public void setLowResolutionImage(String lowResolutionImage) {
        this.lowResolutionImage = lowResolutionImage;
    }

    public void setTrackerCardList(List<TrackerCard> trackerCardList) {
        this.trackerCardList = trackerCardList;
    }

    public void setRewardsUponRegistrationList(List<RewardsUponRegistration> rewardsUponRegistrationList) {
        this.rewardsUponRegistrationList = rewardsUponRegistrationList;
    }

    public void setMainContent(List<LSCSReplicantElement> mainContent) {
        this.mainContent = mainContent;
    }

    public void setTermsAndConditions(List<LSCSReplicantElement> termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
    }

    public void setCompletionMessage(List<CompletionMessage> completionMessage) {
        this.completionMessage = completionMessage;
    }

    public List<ProductTermsCondition> getProductTermsConditionList() {
        return productTermsConditionList;
    }

    public void setProductTermsConditionList(List<ProductTermsCondition> productTermsConditionList) {
        this.productTermsConditionList = productTermsConditionList;
    }
}
