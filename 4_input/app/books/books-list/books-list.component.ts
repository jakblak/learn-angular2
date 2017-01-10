import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-books-list',
  templateUrl: 'books-list.component.html'
})

export class BooksListComponent implements OnInit, OnChanges {

  ngOnInit() {
    console.log('Init', this.booksInStock);
  }

  ngOnChanges() {
    console.log('new change detected');
  }

  changeMethod(): void {
    this.animals = ['dog', 'cat'];
    console.log('change method happened', this.animals);
  }

  animals: string[] = ['zebra', 'moose'];
  imageWidth: number = 100;
  showImage: boolean = true;
  booksInStock: number = 2;

  books: any[] = [{
    bookAuthor: "Tom Jones",
    bookTitle: "War and Peace 2",
    bookPrice: 29.95,
    bookDescription: "Book of historical fiction",
    publishedOn: new Date('02/11/1921'),
    inStock: "yes",
    bookReviews: 15,
    bookImageUrl: "app/assets/images/656.jpg"
  }]

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}