import { Component } from '@angular/core';

@Component({
  selector: 'bs-welcome',
  templateUrl: 'app/home/welcome.component.html',
  // styles: ['.byline { color: green; }']
  styleUrls: ['app/home/welcome.component.css']
})

export class WelcomeComponent {
  pageTitle: string = "Welcome";
}