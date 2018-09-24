package com.aa.apt.ventana.response;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "PingResponse"
})
public class PingOutput implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -162848156967770240L;
	
	@JsonProperty("PingResponse")
    private String pingResponse;

	public String getPingResponse() {
		return pingResponse;
	}
	
	public void setPingResponse(String pingResponse) {
		this.pingResponse = pingResponse;
	}

}