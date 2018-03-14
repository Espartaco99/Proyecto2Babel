import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public vista;
  constructor() {
   }

  ngOnInit() {
  }
  desplegarMenu() {
    document.querySelector('#menu_movil').classList.toggle('oculto');
  }
}
