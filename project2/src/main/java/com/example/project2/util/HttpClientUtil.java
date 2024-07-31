package com.example.project2.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.client.methods.CloseableHttpResponse;

import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class HttpClientUtil {

    private static final ObjectMapper objectMapper = new ObjectMapper();

    public static <T> T get(String url, Class<T> responseType) {
        try (CloseableHttpClient client = HttpClients.createDefault()) {
            HttpGet request = new HttpGet(url);
            try (CloseableHttpResponse response = client.execute(request)) {
                return objectMapper.readValue(response.getEntity().getContent(), responseType);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static <T> T post(String url, Object requestBody, Class<T> responseType) {
        try (CloseableHttpClient client = HttpClients.createDefault()) {
            HttpPost request = new HttpPost(url);
            request.setEntity(new StringEntity(objectMapper.writeValueAsString(requestBody), ContentType.APPLICATION_JSON));
            try (CloseableHttpResponse response = client.execute(request)) {
                return objectMapper.readValue(response.getEntity().getContent(), responseType);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
