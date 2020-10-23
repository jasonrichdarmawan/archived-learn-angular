package com.example.csvtodb.controller;

import com.example.csvtodb.model.FileModel;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileReader;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/csv")
public class CSVToDBController {

  // TODO: security implementation?
  // 1. How to only get the Headers -> if the token is valid -> get the Body aswell.
  // Client -> Endpoint
  @PostMapping
  @CrossOrigin("http://localhost:4200")
  @ResponseBody
  public ResponseEntity<String> postFile(@RequestHeader Map<String, String> requestHeaders, @RequestBody FileModel file) {
    HttpHeaders responseHeaders = new HttpHeaders();
    responseHeaders.add("Access-Control-Allow-Origin", "*");

    System.out.println(requestHeaders.get("authorization") + file.getFile());
    if (requestHeaders.get("authorization").split(" ")[1].equals("23")) {
      // do Something
      return new ResponseEntity<String>("{\"message\": \"OK\"}", HttpStatus.OK);
    } else {
      // error
      return new ResponseEntity<String>("{\"message\": \"ERROR\"}", HttpStatus.FORBIDDEN);
    }

  }
}
