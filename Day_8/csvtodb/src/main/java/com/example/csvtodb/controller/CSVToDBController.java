package com.example.csvtodb.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
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
  public ResponseEntity<String> postFile(
          @RequestHeader Map<String, String> requestHeaders,
//          @RequestBody FileModel file
          @RequestParam("file") MultipartFile file
  ) {
    HttpHeaders responseHeaders = new HttpHeaders();
    responseHeaders.add("Access-Control-Allow-Origin", "*");

    try {
      byte[] bytes = file.getBytes();
      String formData = new String(bytes);
      System.out.println(requestHeaders.get("authorization") + '\n' +
              file.getOriginalFilename() + '\n' +
              formData
      );
    } catch (IOException e) {
      e.printStackTrace();
    }

    if (requestHeaders.get("authorization").split(" ")[1].equals("23")) {
      // do Something
      return new ResponseEntity<String>("{\"message\": \"OK\"}", HttpStatus.OK);
    } else {
      // error
      return new ResponseEntity<String>("{\"message\": \"ERROR\"}", HttpStatus.FORBIDDEN);
    }

  }

  @GetMapping
  @CrossOrigin("http://localhost:4200")
  public ResponseEntity<String> getFile(@RequestHeader Map<String, String> requestHeaders) {
    String fileName = "Untitled spreadsheet - Sheet1 (1).csv";
    byte[] bytes = null;
    try {
      bytes = Files.readAllBytes(Path.of("Untitled spreadsheet - Sheet1 (1).csv"));
    } catch (IOException e) {
      e.printStackTrace();
    }

    if (requestHeaders.get("authorization").split(" ")[1].equals("23")) {
      // do Something
      return new ResponseEntity(bytes, HttpStatus.OK);
//      return new ResponseEntity("{\"href\": \"https://people.sc.fsu.edu/~jburkardt/data/csv/addresses.csv\"}", HttpStatus.OK);
    } else {
      // error
      return new ResponseEntity<String>("{\"message\": \"ERROR\"}", HttpStatus.FORBIDDEN);
    }
  }
}
