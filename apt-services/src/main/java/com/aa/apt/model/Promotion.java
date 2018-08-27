package com.aa.apt.model;

public class Promotion {
	
	  String PromotionOrChallengeCode;
	  String isTrending;
	  String keyword;
	  String PromotionName;
	  String aacomview;
	  String termsandconditions;
	  
	  
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

	
	  
	  public String getPromotionName() {
		return PromotionName;
	}

	public void setPromotionName(String promotionName) {
		PromotionName = promotionName;
	}

	public Promotion(String a,String b,String c)
	  {
		  PromotionOrChallengeCode = a;
		  isTrending = b;
		  keyword = c;
		  
	  }
	  
	  public Promotion()
	  {
		  
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
