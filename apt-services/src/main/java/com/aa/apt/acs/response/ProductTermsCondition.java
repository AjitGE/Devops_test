package com.aa.apt.acs.response;

import java.io.Serializable;
import java.util.Collections;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductTermsCondition implements Serializable {

    private static final long serialVersionUID = 5159117068345844086L;

    @JsonProperty("ElementType")
    private String elementType;

    @JsonProperty("ProductId")
    private String productId;

    @JsonProperty("ProductName")
    private String productName;

    @JsonProperty("TermsConditionLink")
    private ProductTermsConditionLinkElement linkElement;

    @JsonProperty("TermsCondition")
    private List<LSCSReplicantElement> termsCondition = Collections.emptyList();

    @JsonProperty("RulesRestriction")
    private List<LSCSReplicantElement> rulesRestriction = Collections.emptyList();

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public ProductTermsConditionLinkElement getLinkElement() {
        return linkElement;
    }

    public void setLinkElement(ProductTermsConditionLinkElement linkElement) {
        this.linkElement = linkElement;
    }

    public String getElementType() {
        return elementType;
    }

    public void setElementType(String elementType) {
        this.elementType = elementType;
    }

    public List<LSCSReplicantElement> getTermsCondition() {
        return termsCondition;
    }

    public void setTermsCondition(List<LSCSReplicantElement> termsCondition) {
        this.termsCondition = termsCondition;
    }

    public List<LSCSReplicantElement> getRulesRestriction() {
        return rulesRestriction;
    }

    public void setRulesRestriction(List<LSCSReplicantElement> rulesRestriction) {
        this.rulesRestriction = rulesRestriction;
    }

}
