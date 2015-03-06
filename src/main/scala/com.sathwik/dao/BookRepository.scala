package com.sathwik.dao

import java.lang.Long

import com.sathwik.model.Book
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.CrudRepository

trait BookRepository extends JpaRepository[Book, Long]