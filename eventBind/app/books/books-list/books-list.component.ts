import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-books-list',
  templateUrl: 'books-list.component.html'
})

export class BooksListComponent {
  imageWidth: number = 100;
  showImage: boolean = true;

  bookAuthor: string = "Tom Jones";
  bookTitle: string = "War and Peace 2";
  bookPrice: string = "$29.95";
  bookDescription: string = "Book of historical fiction";
  bookReviews: number = 15;
  bookImageUrl: string = "app/assets/images/656.jpg";

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}