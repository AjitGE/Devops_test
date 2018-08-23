package com.aa.apt.acs.response;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class RewardsUponRegistration implements Serializable {

    private static final long serialVersionUID = 661757032014816097L;

    @JsonProperty("RewardType")
    private String rewardType;

    @JsonProperty("RewardFormat")
    private String rewardFormat;

    @JsonProperty("RewardDescription")
    private String rewardDescription;

    @JsonProperty("ProductId")
    private String productId;

    @JsonProperty("Quantity")
    private String quantity;

    public String getRewardType() {
        return rewardType;
    }

    public String getRewardFormat() {
        return rewardFormat;
    }

    public String getRewardDescription() {
        return rewardDescription;
    }

    public String getProductId() {
        return productId;
    }

    public String getQuantity() {
        return quantity;
    }



    //Setters can go away when mocks go away


    public void setRewardType(String rewardType) {
        this.rewardType = rewardType;
    }

    public void setRewardFormat(String rewardFormat) {
        this.rewardFormat = rewardFormat;
    }

    public void setRewardDescription(String rewardDescription) {
        this.rewardDescription = rewardDescription;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }
}
