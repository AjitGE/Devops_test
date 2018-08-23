package com.aa.apt.ar5.response;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LscsPromotionContentResponse implements Serializable {
    
    private static final long serialVersionUID = 2607462124347977914L;
    @JsonProperty("Content")
    private Content content;

    public Content getContent() {
        return content;
    }


    //setters can go away when mocks go away
    public void setContent(Content content) {
        this.content = content;
    }
}
