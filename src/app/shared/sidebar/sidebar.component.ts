import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  /* Se puede manejar CSS de manera controlada y encapsulada */
  styles:[
    `
      li{
        cursor: pointer
      }
    `
  ]
})
export class SidebarComponent{


}
