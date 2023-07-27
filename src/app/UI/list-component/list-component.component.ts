import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent {
  @Input() item: { id: string, name: string, count: number, price: number } = {
    id: '',
    name: '',
    count: 0,
    price: 0
  }
  @Output() deleteItemEvent = new EventEmitter<string>()
  removeItem(id: string){
    this.deleteItemEvent.emit(id)
  }
}
