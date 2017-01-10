import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-books-list',
  templateUrl: 'books-list.component.html'
})

export class BooksListComponent {

  favoriteMessage: string = '';
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

  onFavoriteClicked(message: string): void {
    this.favoriteMessage = message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}