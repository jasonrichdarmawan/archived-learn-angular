package com.example.csvtodb.controller;

import com.example.csvtodb.model.FileModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/csv")
public class CSVToDBController {

  @PostMapping
  public ResponseEntity<String> postFile(@RequestBody FileModel file) {
    return new ResponseEntity<String>(HttpStatus.CREATED);
  }
}
