import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: any;
  @Output() change = new EventEmitter();
  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected });
    // console.log('hello');
  }
  receiveData(data: any) {
    console.log('Data received in child:', data);
  }
}
