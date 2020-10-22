package com.example.csvtodb.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FileModel {
  private final String file;

  public FileModel(@JsonProperty("file") String file) {
    this.file = file;
  }

  public String getFile() {
    return file;
  }
}
