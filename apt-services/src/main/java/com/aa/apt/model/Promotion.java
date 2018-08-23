package com.aa.apt.aptservices.model;

public class Promotion {
	
	  String PromotionOrChallengeCode;
	  String isTrending;
	  String keyword;
	
	  
	  public Promotion(String a,String b,String c)
	  {
		  PromotionOrChallengeCode = a;
		  isTrending = b;
		  keyword = c;
		  
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

				public void setKeyword(String promotionOrChallengeCode) {
					this.keyword = keyword;
				}

}
