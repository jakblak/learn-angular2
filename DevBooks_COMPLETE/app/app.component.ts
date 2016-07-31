import { Component } from '@angular/core';
import { WelcomeComponent } from './home/welcome.component';

@Component({
  selector: 'bs-app',
  templateUrl: './app/app.component.html',
  directives: [WelcomeComponent]
})

export class AppComponent {
  pageTitle: string = "Dev Book Store";
}