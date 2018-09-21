package com.aa.apt.lscscondition;

import java.io.Serializable;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "assets"
})
public class Results implements Serializable {

  
	private static final long serialVersionUID = -7410386140327780693L;
	@JsonProperty("assets")
    private List<Asset> assets = null;

    @JsonProperty("assets")
    public List<Asset> getAssets() {
        return assets;
    }

    @JsonProperty("assets")
    public void setAssets(List<Asset> assets) {
        this.assets = assets;
    }

}