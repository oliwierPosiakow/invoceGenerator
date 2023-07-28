import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {v4 as uuidv4} from 'uuid'
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-towarow',
  templateUrl: './lista-towarow.component.html',
  styleUrls: ['./lista-towarow.component.scss']
})
export class ListaTowarowComponent {
  constructor(private fb: FormBuilder, private router: Router) {}
  listaTowarow: {id: string, name: string, count: number, price: number}[] = []
  isValid = true
  msg: string = 'Add something to the list via form.'
  //obsluga formularzu
  itemForm = this.fb.group({
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    count: new FormControl(1, [Validators.min(1), Validators.max(100), Validators.required, Validators.pattern("^[0-9]*$")]),
    price: new FormControl(1, [Validators.min(1), Validators.max(1000000), Validators.required, Validators.pattern("^[0-9]*$")]),
  })
  //funkcje obslugujące dodawanie oraz odejmowanie do listy towarow
  listaTowarowAdd = (item: any) => {
    this.listaTowarow.push({id: uuidv4(), ...item.value})
  }
  listaTowarowRemove = (itemId: string) => {
    this.listaTowarow = this.listaTowarow.filter((item) => {
      return item.id !== itemId
    })
  }
  onSubmit(){
    if(this.itemForm.status === 'VALID'){
      this.listaTowarowAdd(this.itemForm)
      this.itemForm.reset({name: '', price: 1, count: 1})
    }
    else{
      this.isValid = false
    }
  }
  //po kliknieciu 'Get an Invoice' funkcja przenosi do ekranu Invoice oraz podaje do niej dane, dzięki temu ładują sie one jedynie po kliknieciu przycisku wewnatrz ekranu Order List a nie po kliknięciu w nawigację
  navigateInvoice(){
    if(this.listaTowarow.length > 0){
      this.router.navigate(['invoice'], {state: this.listaTowarow} )
    }
    else{
       this.msg = 'No items added.'
      return
    }
  }
}
