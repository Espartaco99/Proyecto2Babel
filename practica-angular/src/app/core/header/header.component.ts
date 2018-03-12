import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public vista;
  constructor() {
    this.vista = {
        aBtnsMenu: document.querySelectorAll('a'),
         eMain : document.querySelector('main'),
        aImports: document.querySelectorAll('link[rel="import"]'),
        oImports: {},
        bMenu:  document.querySelector('#botonMenu')
    };
 // this.desplegarMenu();
   }
   desplegarMenu() {
    document.querySelector('#menu_movil').classList.toggle('oculto');
}

  ngOnInit() {
  }

}
