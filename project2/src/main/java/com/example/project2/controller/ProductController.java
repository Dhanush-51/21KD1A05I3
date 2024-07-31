package com.example.project2.controller;
import com.example.project2.model.Product;
import com.example.project2.service.EcommerceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
 
@RestController
@RequestMapping("/categories")
public class ProductController {

    @Autowired
    private EcommerceService ecommerceService;

    @GetMapping("/{categoryName}/products")
    public List<Product> getProducts(@PathVariable String categoryName,
                                     @RequestParam int top,
                                     @RequestParam double minPrice,
                                     @RequestParam double maxPrice,
                                     @RequestParam(defaultValue = "0") int page,
                                     @RequestParam(defaultValue = "price") String sortBy,
                                     @RequestParam(defaultValue = "asc") String sortOrder) {
        return ecommerceService.getProducts("AMZ", categoryName, top, minPrice, maxPrice, page, sortBy, sortOrder);
    }

    @GetMapping("/{categoryName}/products/{productId}")
    public Product getProductDetails(@PathVariable String categoryName,
                                     @PathVariable String productId) {
        return ecommerceService.getProductDetails(categoryName, productId);
    }
}