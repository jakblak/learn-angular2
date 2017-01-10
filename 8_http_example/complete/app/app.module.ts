import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { BooksListComponent }   from './books/books-list/books-list.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { FavoriteComponent } from './favorites/favorite.component';

import { BookService } from './books/book.service';

@NgModule({
  imports:      [ BrowserModule,
                       FormsModule,
                       HttpModule ],
  providers: [BookService],
  declarations: [ AppComponent,
                          BooksListComponent,
                          TruncatePipe,
                          FavoriteComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }