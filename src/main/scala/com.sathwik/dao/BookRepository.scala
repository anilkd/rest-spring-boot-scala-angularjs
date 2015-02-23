package com.sathwik.dao

import java.lang.Long

import com.sathwik.model.Book
import org.springframework.data.repository.CrudRepository

trait BookRepository extends CrudRepository[Book, String]