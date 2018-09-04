package com.aa.apt.model;

import java.util.List;

public class LoyaltyFulfillmentRequest {
	public String getAadvantageNumber() {
		return aadvantageNumber;
	}

	public void setAadvantageNumber(String aadvantageNumber) {
		this.aadvantageNumber = aadvantageNumber;
	}

	public PaymentInfo getPaymentInfo() {
		return paymentInfo;
	}

	public void setPaymentInfo(PaymentInfo paymentInfo) {
		this.paymentInfo = paymentInfo;
	}

	public EliteTierInfo getEliteTierInfo() {
		return eliteTierInfo;
	}

	public void setEliteTierInfo(EliteTierInfo eliteTierInfo) {
		this.eliteTierInfo = eliteTierInfo;
	}

	

	String aadvantageNumber = null;
	
	PaymentInfo paymentInfo = null;
	
	EliteTierInfo eliteTierInfo = null;
	
	public List<CurrencyInfo> getCurrencyInfoList() {
		return currencyInfoList;
	}

	public void setCurrencyInfoList(List<CurrencyInfo> currencyInfoList) {
		this.currencyInfoList = currencyInfoList;
	}



	List<CurrencyInfo> currencyInfoList = null;

}
