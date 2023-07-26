import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {
  constructor(private router: Router) {
    // @ts-ignore
    this.invoiceData = this.router.getCurrentNavigation()?.extras.state
    console.log(this.invoiceData)
  }
  invoiceData: {id: string, name: string, count: number, price: number}[] = []
}
