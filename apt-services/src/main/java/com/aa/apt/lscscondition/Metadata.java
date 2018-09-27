package com.aa.apt.lscscondition;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "KeyWord"
})
public class Metadata implements Serializable {

 
	private static final long serialVersionUID = -7700536046239866649L;
	@JsonProperty("KeyWord")
    private String keywords;
	
	@JsonProperty("Trending")
    private String trending;
	
	@JsonProperty("Promotionid")
    private String promotionId;
	
	@JsonProperty("PST")
    private String pst;

    @JsonProperty("keywords")
    public String getKeywords() {
        return keywords;
    }

    @JsonProperty("keywords")
    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }
    
    @JsonProperty("Trending")
    public String getTrending() {
 		return trending;
 	}

    @JsonProperty("Trending")
 	public void setTrending(String trending) {
 		this.trending = trending;
 	}
    
    @JsonProperty("Promotionid")
    public String getPromotionId() {
		return promotionId;
	}

    @JsonProperty("Promotionid")
	public void setPromotionId(String promotionId) {
		this.promotionId = promotionId;
	}
    
    @JsonProperty("PST")
    public String getPst() {
		return pst;
	}

    @JsonProperty("PST")
	public void setPst(String pst) {
		this.pst = pst;
	}

}