package com.aa.apt.model;

public class PaymentInfo {
	
	public String getPaymentTxnNumber() {
		return paymentTxnNumber;
	}
	public void setPaymentTxnNumber(String paymentTxnNumber) {
		this.paymentTxnNumber = paymentTxnNumber;
	}
	public String getPurchaseDate() {
		return purchaseDate;
	}
	public void setPurchaseDate(String purchaseDate) {
		this.purchaseDate = purchaseDate;
	}
	public String getPurchaseAmount() {
		return purchaseAmount;
	}
	public void setPurchaseAmount(String purchaseAmount) {
		this.purchaseAmount = purchaseAmount;
	}
	String paymentTxnNumber = null;
	String purchaseDate= null;
	String purchaseAmount= null;
	

}
