/**
 * 
 */
package com.aa.apt.lscscondition;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author 893108
 *
 */

@JsonIgnoreProperties(ignoreUnknown = true)
public class LscsConditionResponse implements Serializable {
	
	
	private static final long serialVersionUID = 2294674153877619744L;
	@JsonProperty("total")
	private String total;
	@JsonProperty("included")
	private String included;
	@JsonProperty("start")
	private String start;
	@JsonProperty("status")
	private String status;
	@JsonProperty("results")
	private Results results;
	

	public String getTotal() {
		return total;
	}
	public void setTotal(String total) {
		this.total = total;
	}
	public String getIncluded() {
		return included;
	}
	public void setIncluded(String included) {
		this.included = included;
	}
	public String getStart() {
		return start;
	}
	public void setStart(String start) {
		this.start = start;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Results getResults() {
		return results;
	}
	public void setResults(Results results) {
		this.results = results;
	}
	
	

}
