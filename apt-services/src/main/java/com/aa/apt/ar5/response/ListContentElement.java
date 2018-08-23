package com.aa.apt.ar5.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ListContentElement extends LSCSReplicantElement {

    private static final long serialVersionUID = -8463011917374849093L;

    @JsonProperty("ListType")
    private String listType;

    @JsonProperty("ListElement")
    private List<ListElement> listElements;

    @JsonProperty("ListElements")
    private List<ListElement> termsAndConditionsListElements;

    public String getListType() {
        return listType;
    }

    public void setListType(String listType) {
        this.listType = listType;
    }

    public List<ListElement> getListElements() {
        if (listElements == null) {
            listElements = termsAndConditionsListElements;
        }
        return listElements;
    }

    public void setListElements(List<ListElement> listElements) {
        this.listElements = listElements;
    }

    public List<ListElement> getTermsAndConditionsListElements() {
        return termsAndConditionsListElements;
    }

    public void setTermsAndConditionsListElements(List<ListElement> termsAndConditionsListElements) {
        this.termsAndConditionsListElements = termsAndConditionsListElements;
    }

}
