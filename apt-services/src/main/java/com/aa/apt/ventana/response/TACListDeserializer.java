package com.aa.apt.ventana.response;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

class TACListDeserializer extends JsonDeserializer<TACList> {

    @Override
    public TACList deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        JsonToken token = jp.getCurrentToken();
        if (JsonToken.VALUE_STRING == token) {
            return null;
        }

        return jp.readValueAs(TACList.class);
    }
}