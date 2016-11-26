import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-favorite',
  templateUrl: 'favorite.component.html'
})

export class FavoriteComponent {
  @Input() reviews: number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    this.notify.emit('Message from child');
  }
}