package com.example.demo;

import java.io.IOException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

@RestController
@RequestMapping("/api/user")
public class ApiController {
    
    @GetMapping()
    public String getUsers() throws IOException{
        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url("https://reqres.in/api/users?page=2")
                .get()
                .addHeader("X-Authorization", "l7u502p8v46ba3ppgvj5y2aad50lb9")
                .addHeader("accept", "application/json")
                .build();
        try (Response response = client.newCall(request).execute()){
            String jsonResponse = response.body().string();
            return  jsonResponse;
        }
        
    }
}
