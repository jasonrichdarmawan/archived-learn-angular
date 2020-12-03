package com.example.csvtodb.controller;

import com.example.csvtodb.mapper.NameMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/subscribe")
public class SubscribeController {
  @Autowired
  NameMapper nameMapper;

  @GetMapping("/name")
  @CrossOrigin("http://localhost:4200")
  public ResponseEntity<String> getName() {
    Map<String, String> body = new HashMap<>();
    body.put("name", nameMapper.name());
    return new ResponseEntity(body, HttpStatus.ACCEPTED);
  }
}
