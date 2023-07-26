import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
@Component({
  selector: 'app-lista-towarow',
  templateUrl: './lista-towarow.component.html',
  styleUrls: ['./lista-towarow.component.scss']
})
export class ListaTowarowComponent {
  itemForm = new FormGroup({
    name: new FormControl('', Validators.minLength(3)),
    count: new FormControl(0),
    price: new FormControl(0),
  })
  listaTowarow = []
  onSubmit(){
    // @ts-ignore
    this.listaTowarow.push(this.itemForm.value)
    console.log(this.listaTowarow)
  }
}
