import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaTowarowComponent} from "./screens/lista-towarow/lista-towarow.component";
import {InvoiceComponent} from "./screens/invoice/invoice.component";

const routes: Routes = [
  {
    component: ListaTowarowComponent,
    path: '',
  },
  {
    component: InvoiceComponent,
    path: 'invoice',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
