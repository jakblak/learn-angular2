import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-app',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  pageTitle: string = "Dev Book Store"
  searchBox: string = '';
}