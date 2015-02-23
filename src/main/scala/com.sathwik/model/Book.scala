package com.sathwik.model

import javax.persistence._
import javax.validation.constraints.NotNull

import scala.beans.BeanProperty

/**
 * @author anil.dhulipalla
 */
@Entity
@NamedQuery(name = "Book.findAll", query = "select b from Book b")
class Book {
  @GeneratedValue
  @Id
  @BeanProperty
    var bookId: Long = _
  @BeanProperty
  var author:String =_
  @BeanProperty
  var title:String =_
  @BeanProperty
  var price:Double=_
  @BeanProperty
  var desc:String=_


}
