package com.aa.apt.ar5.response;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CompletionMessage implements Serializable {
    
    private static final long serialVersionUID = 1L;

    @JsonProperty("ShowLinkToRewardsTab")
    private String showLinkInRewardsTab;
    
    @JsonProperty("Message")
    private List<LSCSReplicantElement> message;

    public String getShowLinkInRewardsTab() {
        return showLinkInRewardsTab;
    }

    public List<LSCSReplicantElement> getMessage() {
        return message;
    }

}
