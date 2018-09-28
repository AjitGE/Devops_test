package com.aa.apt.acs.response;

public class LscsPromotionProgressResponse {

    private String promotionOrChallengeCode;
    private String promotionName;
    private String promotionType;
    private String description;
    private String highResolutionImage;
    private String lowResolutionImage;
    // skipping mainContent and termsAndConitions
    private LscsRegistrationReward[] rewardsUponRegistration;
    private LscsTrackerCard[] trackerCard;

    public String getPromotionOrChallengeCode() {
        return promotionOrChallengeCode;
    }

    public String getPromotionName() {
        return promotionName;
    }

    public String getPromotionType() {
        return promotionType;
    }

    public String getDescription() {
        return description;
    }

    public String getHighResolutionImage() {
        return highResolutionImage;
    }

    public String getLowResolutionImage() {
        return lowResolutionImage;
    }

    public LscsRegistrationReward[] getRewardsUponRegistration() {
        return rewardsUponRegistration == null ? null : rewardsUponRegistration.clone();
    }

    public LscsTrackerCard[] getTrackerCard() {
        return trackerCard == null ? null : trackerCard.clone();
    }

    // setters can go away once I get a response from a real service?
    public void setPromotionOrChallengeCode(String promotionOrChallengeCode) {
        this.promotionOrChallengeCode = promotionOrChallengeCode;
    }

    public void setPromotionName(String promotionName) {
        this.promotionName = promotionName;
    }

    public void setPromotionType(String promotionType) {
        this.promotionType = promotionType;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setHighResolutionImage(String highResolutionImage) {
        this.highResolutionImage = highResolutionImage;
    }

    public void setLowResolutionImage(String lowResolutionImage) {
        this.lowResolutionImage = lowResolutionImage;
    }

    // check incase of null input
    public void setRewardsUponRegistration(LscsRegistrationReward[] rewardsUponRegistration) {
        this.rewardsUponRegistration = rewardsUponRegistration.clone();
    }

    // check incase of null input
    public void setTrackerCard(LscsTrackerCard[] trackerCard) {
        this.trackerCard = trackerCard.clone();
    }
}
