import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IBook } from './book';

@Injectable()
export class BookService {

  getBooks(): IBook[] {
    return [{
    bookAuthor: "Tom Jones",
    bookTitle: "War and Peace 2",
    bookPrice: 29.95,
    bookDescription: "Book of historical fiction",
    publishedOn: new Date('02/11/1921'),
    inStock: "yes",
    bookReviews: 15,
    bookImageUrl: "app/assets/images/656.jpg"
  }, {
    bookAuthor: "Mike Jones",
    bookTitle: "War and Peace 3",
    bookPrice: 19.95,
    bookDescription: "Book of historical fact",
    publishedOn: new Date('02/11/1921'),
    inStock: "yes",
    bookReviews: 18,
    bookImageUrl: "app/assets/images/656.jpg"
  }]
  }
}