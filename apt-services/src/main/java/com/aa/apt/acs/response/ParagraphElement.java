package com.aa.apt.acs.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ParagraphElement extends LSCSReplicantElement {
    
    private static final long serialVersionUID = -7146070801393833639L;
    @JsonProperty("Paragraph")
    private String paragraph;

    public String getParagraph() {
        return paragraph;
    }

    public void setParagraph(String paragraph) {
        this.paragraph = paragraph;
    }

}
