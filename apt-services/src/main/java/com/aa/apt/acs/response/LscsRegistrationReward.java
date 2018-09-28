package com.aa.apt.acs.response;

import java.io.Serializable;

public class LscsRegistrationReward implements Serializable {

    private static final long serialVersionUID = -7850027447305547970L;
    private String rewardType;
    private String rewardFormat;
    private String rewardDescription;
    private String productId;
    private Integer quantity;

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

    public Integer getQuantity() {
        return quantity;
    }

    //setters can go away once I get a real response from a real service?
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

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
