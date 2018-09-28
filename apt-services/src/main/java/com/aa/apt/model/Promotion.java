package com.aa.apt.model;

import java.time.LocalDate;

public class Promotion {
	
	//From ACS
	String PromotionOrChallengeCode;
	String isTrending;
	String keyword;
	String resolveIssues;
	String fulfillment;
	String partnerCodes;
	String howToEarn;
	String registrationRequired;
	String targetedPromotion;
	String PSTCodes;
	String directmailer;
	String marketingpageurl;
	String emailurl;
	
	//From AR5
	String PromotionName;
	String aacomview;
	String termsandconditions;
	
	
	//From Ventana
	LocalDate PromoStartDate;
	LocalDate PromoEndDate;
	String tac;
	String memRegStartDate;  //Ventana Field Response  : RegistrationStartDate 
	String memRegEndDate;  //Ventana Field Response : AACOMRegistrationEndDate
	String memTravelStartDate; //Ventana Field Response : ActivityStartDate
	String memTravelEndDate;  //Ventana Field Response : ActivityEndDate
	String lateRegEndDate; //Ventana Field Response : RegistrationEndDate
	
	//From Ventana - But not required to show in UI
	String promoCode;
	String ventanaPromoName;
	String ventanaPromoDesc;
	String ventanaPromoType;
	String partnerManagedPromo;
	String activeornot;
	
	

	public String getPromoCode() {
		return promoCode;
	}

	public void setPromoCode(String promoCode) {
		this.promoCode = promoCode;
	}

	public String getVentanaPromoName() {
		return ventanaPromoName;
	}

	public void setVentanaPromoName(String ventanaPromoName) {
		this.ventanaPromoName = ventanaPromoName;
	}

	public String getVentanaPromoDesc() {
		return ventanaPromoDesc;
	}

	public void setVentanaPromoDesc(String ventanaPromoDesc) {
		this.ventanaPromoDesc = ventanaPromoDesc;
	}

	public String getVentanaPromoType() {
		return ventanaPromoType;
	}

	public void setVentanaPromoType(String ventanaPromoType) {
		this.ventanaPromoType = ventanaPromoType;
	}

	public String getPartnerManagedPromo() {
		return partnerManagedPromo;
	}

	public void setPartnerManagedPromo(String partnerManagedPromo) {
		this.partnerManagedPromo = partnerManagedPromo;
	}

	public String getActiveornot() {
		return activeornot;
	}

	public void setActiveornot(String activeornot) {
		this.activeornot = activeornot;
	}

	public String getDirectmailer() {
		return directmailer;
	}

	public void setDirectmailer(String directmailer) {
		this.directmailer = directmailer;
	}

	public String getMarketingpageurl() {
		return marketingpageurl;
	}

	public void setMarketingpageurl(String marketingpageurl) {
		this.marketingpageurl = marketingpageurl;
	}

	public String getEmailurl() {
		return emailurl;
	}

	public void setEmailurl(String emailurl) {
		this.emailurl = emailurl;
	}
	
	public String getPSTCodes() {
		return PSTCodes;
	}

	public void setPSTCodes(String pSTCodes) {
		PSTCodes = pSTCodes;
	}

	

	public String getTac() {
		return tac;
	}

	public void setTac(String tac) {
		this.tac = tac;
	}

	public String getMemRegStartDate() {
		return memRegStartDate;
	}

	public void setMemRegStartDate(String memRegStartDate) {
		this.memRegStartDate = memRegStartDate;
	}

	public String getMemRegEndDate() {
		return memRegEndDate;
	}

	public void setMemRegEndDate(String memRegEndDate) {
		this.memRegEndDate = memRegEndDate;
	}

	public String getMemTravelStartDate() {
		return memTravelStartDate;
	}

	public void setMemTravelStartDate(String memTravelStartDate) {
		this.memTravelStartDate = memTravelStartDate;
	}

	public String getMemTravelEndDate() {
		return memTravelEndDate;
	}

	public void setMemTravelEndDate(String memTravelEndDate) {
		this.memTravelEndDate = memTravelEndDate;
	}

	public String getLateRegEndDate() {
		return lateRegEndDate;
	}

	public void setLateRegEndDate(String lateRegEndDate) {
		this.lateRegEndDate = lateRegEndDate;
	}

	public String getAacomview() {
		return aacomview;
	}

	public void setAacomview(String aacomview) {
		this.aacomview = aacomview;
	}

	public String getTermsandconditions() {
		return termsandconditions;
	}

	public void setTermsandconditions(String termsandconditions) {
		this.termsandconditions = termsandconditions;
	}
	
	public LocalDate getPromoStartDate() {
		return PromoStartDate;
	}

	public void setPromoStartDate(LocalDate promoStartDate) {
		PromoStartDate = promoStartDate;
	}

	public LocalDate getPromoEndDate() {
		return PromoEndDate;
	}

	public void setPromoEndDate(LocalDate promoEndDate) {
		PromoEndDate = promoEndDate;
	}

	public String getPromotionName() {
		return PromotionName;
	}

	public void setPromotionName(String promotionName) {
		PromotionName = promotionName;
	}

	public String getResolveIssues() {
		return resolveIssues;
	}

	public void setResolveIssues(String resolveIssues) {
		this.resolveIssues = resolveIssues;
	}

	public String getFulfillment() {
		return fulfillment;
	}

	public void setFulfillment(String fulfillment) {
		this.fulfillment = fulfillment;
	}

	public String getPartnerCodes() {
		return partnerCodes;
	}

	public void setPartnerCodes(String partnerCodes) {
		this.partnerCodes = partnerCodes;
	}

	public String getHowToEarn() {
		return howToEarn;
	}

	public void setHowToEarn(String howToEarn) {
		this.howToEarn = howToEarn;
	}

	public String getRegistrationRequired() {
		return registrationRequired;
	}

	public void setRegistrationRequired(String registrationRequired) {
		this.registrationRequired = registrationRequired;
	}

	public String getTargetedPromotion() {
		return targetedPromotion;
	}

	public void setTargetedPromotion(String targetedPromotion) {
		this.targetedPromotion = targetedPromotion;
	}

	public Promotion() {

	}

	public String getPromotionOrChallengeCode() {
		return PromotionOrChallengeCode;
	}

	public void setPromotionOrChallengeCode(String promotionOrChallengeCode) {
		this.PromotionOrChallengeCode = promotionOrChallengeCode;
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

}
