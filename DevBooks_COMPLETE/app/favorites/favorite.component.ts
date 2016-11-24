import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-favorite',
  templateUrl: 'favorite.component.html'
})

export class FavoriteComponent {
  @Input() reviews: number;
}