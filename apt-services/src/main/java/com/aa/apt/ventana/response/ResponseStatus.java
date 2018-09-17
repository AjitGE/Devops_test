package com.aa.apt.ventana.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "Code",
    "Message",
    "ClientTransactionId"
})
public class ResponseStatus {

    @JsonProperty("Code")
    private String code;
    
    @JsonProperty("Message")
    private String message;
    
    @JsonProperty("ClientTransactionId")
    private String clientTransactionId;

    @JsonProperty("Code")
    public String getCode() {
        return code;
    }

    @JsonProperty("Code")
    public void setCode(String code) {
        this.code = code;
    }

    @JsonProperty("Message")
    public String getMessage() {
        return message;
    }

    @JsonProperty("Message")
    public void setMessage(String message) {
        this.message = message;
    }

    @JsonProperty("ClientTransactionId")
    public String getClientTransactionId() {
        return clientTransactionId;
    }

    @JsonProperty("ClientTransactionId")
    public void setClientTransactionId(String clientTransactionId) {
        this.clientTransactionId = clientTransactionId;
    }

}
