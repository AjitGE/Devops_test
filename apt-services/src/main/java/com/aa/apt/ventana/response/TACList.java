package com.aa.apt.ventana.response;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

public class TACList implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 8616952053857072777L;
	
	@JsonProperty("TAC")
    @JsonFormat(with = JsonFormat.Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
    private List<TAC> tacList = null;
	
	
	@JsonProperty("TAC")
	public List<TAC> getTacList() {
		return tacList;
	}

	@JsonProperty("TAC")
	public void setTacList(List<TAC> tacList) {
		this.tacList = tacList;
	}

}
