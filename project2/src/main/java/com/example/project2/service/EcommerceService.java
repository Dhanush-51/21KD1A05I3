package com.example.project2.service;
import com.example.project2.model.CompanyRegistration;
import com.example.project2.model.Product;
import com.example.project2.model.TokenResponse;
import com.example.project2.util.HttpClientUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class EcommerceService {

    @Value("${ecommerce.api.baseurl}")
    private String baseUrl;

    public void registerCompany(CompanyRegistration registration) {
        String url = baseUrl + "/test/register";
        HttpClientUtil.post(url, registration, Void.class);
    }

    public String getAuthToken(String companyName, String clientId, String clientSecret, String ownerName, String ownerEmail, String rollNo) {
        String url = baseUrl + "/test/auth";
        Map<String, String> authRequest = buildAuthRequestBody(companyName, clientId, clientSecret, ownerName, ownerEmail, rollNo);
        TokenResponse response = HttpClientUtil.post(url, authRequest, TokenResponse.class);
        return response.getAccessToken();
    }

    public List<Product> getProducts(String companyName, String categoryName, int top, double minPrice, double maxPrice, int page, String sortBy, String sortOrder) {
        String url = String.format("%s/test/companies/%s/categories/%s/products?top=%d&minPrice=%f&maxPrice=%f&page=%d&sortBy=%s&sortOrder=%s",
                                    baseUrl, companyName, categoryName, top, minPrice, maxPrice, page, sortBy, sortOrder);
        return HttpClientUtil.get(url, List.class);
    }

    public Product getProductDetails(String categoryName, String productId) {
        String url = String.format("%s/test/categories/%s/products/%s", baseUrl, categoryName, productId);
        return HttpClientUtil.get(url, Product.class);
    }

    private Map<String, String> buildAuthRequestBody(String companyName, String clientId, String clientSecret, String ownerName, String ownerEmail, String rollNo) {
        return Map.of(
            "companyName", companyName,
            "clientID", clientId,
            "clientSecret", clientSecret,
            "ownerName", ownerName,
            "ownerEmail", ownerEmail,
            "rollNo", rollNo
        );
    }
}