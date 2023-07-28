import { Component } from '@angular/core';
import {v4 as uuidv4} from "uuid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invoceGenerator';
  listaTowarow: {id: string, name: string, count: number, price: number}[] = []
  listaTowarowAdd = (item: any) => {
    this.listaTowarow.push({id: uuidv4(), ...item.value})
  }
  listaTowarowRemove = (itemId: string) => {
    this.listaTowarow = this.listaTowarow.filter((item) => {
      return item.id !== itemId
    })
  }
}
