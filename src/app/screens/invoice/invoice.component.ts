import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit{
  invoiceData: {id: string, name: string, count: number, price: number}[] = []
  companyData: {name: string, address: string, phones: string[] } = {name: '', address: '', phones: []}
  loading: boolean = false
  constructor(private router: Router) {
    // @ts-ignore
    this.invoiceData = this.router.getCurrentNavigation()?.extras.state
  }
  async getJsonData(){
    await fetch('assets/company.json')
      .then(res => res.json())
      .then(data => {
        this.companyData = data
      })
  }

  calculateFinalPriceAndCount(data: any){
    let finalPrice = 0
    let finalCount = 0
    for(let item of data){
      finalPrice += item.price * item.count
      finalCount += item.count
    }
    return {price: finalPrice, count: finalCount}
  }
  ngOnInit():void {
    this.loading = true
    try {
      if(this.invoiceData){
        this.getJsonData()
        setTimeout(() => {
          this.loading = false
        }, 1000)
      }
    }
    catch (e){
      console.log(e)
    }
  }
}

