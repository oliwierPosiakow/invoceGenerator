import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import { v4 as uuidv4 } from 'uuid'

@Component({
  selector: 'app-lista-towarow',
  templateUrl: './lista-towarow.component.html',
  styleUrls: ['./lista-towarow.component.scss']
})
export class ListaTowarowComponent {
  itemForm = this.fb.group({
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    count: new FormControl(0, [Validators.min(1), Validators.max(100), Validators.required]),
    price: new FormControl(0, [Validators.min(1), Validators.max(1000000), Validators.required]),
  })
  constructor(private fb: FormBuilder) {}
  isSubmitted = false
  listaTowarow: {id: string, name: string, count: number, price: number}[] = []

  listaTowarowAdd = (item: any) => {
    this.listaTowarow.push({id: uuidv4(), ...item.value})
  }
  listaTowarowRemove = (itemId: string) => {
    const newList = this.listaTowarow.filter((item) => {
      return item.id !== itemId
    })
    this.listaTowarow = newList
  }
  onSubmit(){
    // @ts-ignore
    this.listaTowarowAdd(this.itemForm)
    console.log(this.listaTowarow)
    this.isSubmitted = true
  }
}
