import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent {
  @Input() item: {id: string, name: string, count: number, price: number}
}
