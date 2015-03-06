package com.sathwik.web

import java.lang.Long
import javax.validation.Valid

import com.sathwik.dao.BookRepository
import com.sathwik.model.Book
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.validation.BindingResult
import org.springframework.web.bind.annotation._

@RestController
class BookController @Autowired()(private val bookRepository: BookRepository) {

  @RequestMapping(value = Array("/books"), method = Array(RequestMethod.GET))
  def list() = {
    bookRepository.findAll()
  }

  @RequestMapping(value = Array("/books/{id}"), method = Array(RequestMethod.GET))
  def get(@PathVariable("id") id: Long) = {
    bookRepository.findOne(id)
  }


  @RequestMapping(value = Array("/books"), method = Array(RequestMethod.POST))
  def create(@Valid @RequestBody book: Book) = {
    bookRepository.save(book)
  }

  @RequestMapping(value = Array("/books/{id}"), method = Array(RequestMethod.PUT))
  def update(@PathVariable("id") id: Long, @Valid @RequestBody book: Book) = {

    bookRepository.saveAndFlush(book)

  }


  @RequestMapping(value = Array("/books/{id}"), method = Array(RequestMethod.DELETE))
  def delete(@PathVariable("id") id: Long) = {
    bookRepository.delete(id)
  }
}