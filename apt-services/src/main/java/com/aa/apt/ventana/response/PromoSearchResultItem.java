package com.aa.apt.ventana.response;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "PromoCode",
    "PromoName",
    "Description",
    "PromoType",
    "PromoStartDate",
    "PromoEndDate",
    "PartnerManagedPromo",
    "Active",
    "RegistrationRequired",
    "ActivityStartDate",
    "ActivityEndDate",
    "RegistrationStartDate",
    "RegistrationEndDate",
    "AACOMRegistrationEndDate",
    "TAC"
})
@JsonIgnoreProperties(ignoreUnknown = true)
public class PromoSearchResultItem implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 8616952053867072777L;

	@JsonProperty("PromoCode")
    private String promoCode;
    
    @JsonProperty("PromoName")
    private String promoName;
    
    @JsonProperty("Description")
    private String description;
    
   	@JsonProperty("PromoType")
    private String promoType;
    
    @JsonProperty("PromoStartDate")
    private String promoStartDate;
    
    @JsonProperty("PromoEndDate")
    private String promoEndDate;
    
    @JsonProperty("PartnerManagedPromo")
    private String partnerManagedPromo;
    
    @JsonProperty("Active")
    private String active;
    
    @JsonProperty("RegistrationRequired")
    private String registrationRequired;
    
    @JsonProperty("ActivityStartDate")
    private String activityStartDate;
    
   
	@JsonProperty("ActivityEndDate")
    private String activityEndDate;
    
   	@JsonProperty("RegistrationStartDate")
    private String registrationStartDate;
    
    @JsonProperty("RegistrationEndDate")
    private String registrationEndDate;
    
    @JsonProperty("AACOMRegistrationEndDate")
    private String aACOMRegistrationEndDate;
    
    @JsonProperty("TAC")
    private TAC tAC;

    @JsonProperty("PromoCode")
    public String getPromoCode() {
        return promoCode;
    }

    @JsonProperty("PromoCode")
    public void setPromoCode(String promoCode) {
        this.promoCode = promoCode;
    }
    
    @JsonProperty("PromoName")
    public String getPromoName() {
		return promoName;
	}

    @JsonProperty("PromoName")
	public void setPromoName(String promoName) {
		this.promoName = promoName;
	}

    @JsonProperty("Description")
	public String getDescription() {
		return description;
	}

    @JsonProperty("Description")
	public void setDescription(String description) {
		this.description = description;
	}


    @JsonProperty("PromoType")
    public String getPromoType() {
        return promoType;
    }

    @JsonProperty("PromoType")
    public void setPromoType(String promoType) {
        this.promoType = promoType;
    }

    @JsonProperty("PromoStartDate")
    public String getPromoStartDate() {
        return promoStartDate;
    }

    @JsonProperty("PromoStartDate")
    public void setPromoStartDate(String promoStartDate) {
        this.promoStartDate = promoStartDate;
    }

    @JsonProperty("PromoEndDate")
    public String getPromoEndDate() {
        return promoEndDate;
    }

    @JsonProperty("PromoEndDate")
    public void setPromoEndDate(String promoEndDate) {
        this.promoEndDate = promoEndDate;
    }

    @JsonProperty("PartnerManagedPromo")
    public String getPartnerManagedPromo() {
        return partnerManagedPromo;
    }

    @JsonProperty("PartnerManagedPromo")
    public void setPartnerManagedPromo(String partnerManagedPromo) {
        this.partnerManagedPromo = partnerManagedPromo;
    }

    @JsonProperty("Active")
    public String getActive() {
        return active;
    }

    @JsonProperty("Active")
    public void setActive(String active) {
        this.active = active;
    }

    @JsonProperty("RegistrationRequired")
    public String getRegistrationRequired() {
        return registrationRequired;
    }

    @JsonProperty("RegistrationRequired")
    public void setRegistrationRequired(String registrationRequired) {
        this.registrationRequired = registrationRequired;
    }

    @JsonProperty("ActivityStartDate")
    public String getActivityStartDate() {
        return activityStartDate;
    }

    @JsonProperty("ActivityStartDate")
    public void setActivityStartDate(String activityStartDate) {
        this.activityStartDate = activityStartDate;
    }
    
    @JsonProperty("ActivityEndDate")
    public String getActivityEndDate() {
		return activityEndDate;
	}

    @JsonProperty("ActivityEndDate")
	public void setActivityEndDate(String activityEndDate) {
		this.activityEndDate = activityEndDate;
	}

    @JsonProperty("RegistrationStartDate")
    public String getRegistrationStartDate() {
        return registrationStartDate;
    }

    @JsonProperty("RegistrationStartDate")
    public void setRegistrationStartDate(String registrationStartDate) {
        this.registrationStartDate = registrationStartDate;
    }

    @JsonProperty("RegistrationEndDate")
    public String getRegistrationEndDate() {
        return registrationEndDate;
    }

    @JsonProperty("RegistrationEndDate")
    public void setRegistrationEndDate(String registrationEndDate) {
        this.registrationEndDate = registrationEndDate;
    }

    @JsonProperty("AACOMRegistrationEndDate")
    public String getAACOMRegistrationEndDate() {
        return aACOMRegistrationEndDate;
    }

    @JsonProperty("AACOMRegistrationEndDate")
    public void setAACOMRegistrationEndDate(String aACOMRegistrationEndDate) {
        this.aACOMRegistrationEndDate = aACOMRegistrationEndDate;
    }
    
    @JsonProperty("TAC")
    public TAC getTAC() {
        return tAC;
    }

    @JsonProperty("TAC")
    public void setTAC(TAC tAC) {
        this.tAC = tAC;
    }

}
