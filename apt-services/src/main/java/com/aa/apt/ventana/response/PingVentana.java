package com.aa.apt.ventana.response;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class PingVentana implements Serializable{
	
	private static final long serialVersionUID = 8762318822569484812L;
	
	@JsonProperty("PingOutput")
	private PingOutput pingOutput;

	public PingOutput getPingOutput() {
		return pingOutput;
	}

	public void setPingOutput(PingOutput pingOutput) {
		this.pingOutput = pingOutput;
	}
	

}