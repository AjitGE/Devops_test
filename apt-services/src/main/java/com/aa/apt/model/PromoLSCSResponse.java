package com.aa.apt.aptservices.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder({
    "Content"
})

@JsonIgnoreProperties(ignoreUnknown = true)
public class PromoLSCSResponse {
	
	@JsonProperty("Content")
    private Content content;

    @JsonProperty("Content")
    public Content getContent() {
        return content;
    }

    @JsonProperty("Content")
    public void setContent(Content content) {
        this.content = content;
    }
	
	@Override
    public String toString() {
		return "LSCSResponse{" +
				"content='" + content + '\'' +
    
				'}';
	}

}
