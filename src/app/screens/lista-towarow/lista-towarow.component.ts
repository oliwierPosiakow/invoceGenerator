import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {v4 as uuidv4} from 'uuid'
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-towarow',
  templateUrl: './lista-towarow.component.html',
  styleUrls: ['./lista-towarow.component.scss']
})
export class ListaTowarowComponent {
  itemForm = this.fb.group({
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    count: new FormControl(1, [Validators.min(1), Validators.max(100), Validators.required]),
    price: new FormControl(1, [Validators.min(1), Validators.max(1000000), Validators.required]),
  })
  constructor(private fb: FormBuilder, private router: Router) {}
  isSubmitted = false
  listaTowarow: {id: string, name: string, count: number, price: number}[] = []

  listaTowarowAdd = (item: any) => {
    this.listaTowarow.push({id: uuidv4(), ...item.value})
  }
  listaTowarowRemove = (itemId: string) => {
    this.listaTowarow = this.listaTowarow.filter((item) => {
      return item.id !== itemId
    })
  }
  onSubmit(){
    // @ts-ignore
    this.listaTowarowAdd(this.itemForm)
    console.log(this.listaTowarow)
    this.isSubmitted = true
    this.itemForm.reset({name: '', price: 1, count: 1})
  }
  navigateInvoice(){
    this.router.navigate(['invoice'], {state: this.listaTowarow} )
  }
}
