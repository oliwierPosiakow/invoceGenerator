import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private router: Router) {
  }
  //funkcja określająca czy dana ścieżka jest aktywna oraz nakładająca odpowiednie style na aktywną ikonę
  toggleActivePath(desiredPath: string){
    const currentRoute: string = this.router.url
    if(currentRoute == desiredPath){
      return 'active-tab'
    }
    else{
      return ''
    }
  }

}
