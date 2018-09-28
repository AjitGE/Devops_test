package com.aa.apt.acs.response;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "ElementType",
        visible = true)
@JsonSubTypes({
        @Type(value = HeaderElement.class, name = "Heading"),
        @Type(value = ParagraphElement.class, name = "Paragraph"),
        @Type(value = UrlElement.class, name = "Url"),
        @Type(value = TermsAndConditionsUrl.class, name = "TermsAndConditionUrl"),
        @Type(value = ListContentElement.class, name = "List")

})
public class LSCSReplicantElement implements Serializable {

    private static final long serialVersionUID = -1059193609883792620L;
    @JsonProperty("ElementType")
    private String elementType;

    public String getElementType() {
        return elementType;
    }

    public void setElementType(String elementType) {
        this.elementType = elementType;
    }

}
