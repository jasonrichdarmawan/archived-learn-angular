package com.example.csvtodb.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface NameMapper {

  @Select("SELECT name FROM name WHERE id=1")
  String name();
}
