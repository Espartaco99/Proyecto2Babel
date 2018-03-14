import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Datos } from '../modelos/datos';


@Component({
  selector: 'bbl-about',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-10">
          <bbl-autores></bbl-autores>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  @Output() public pasarDatos = new EventEmitter<object>();
  @Input()  recibirDatos: Datos;
  constructor() {
    this.pasarDatos = new EventEmitter();
   }

  ngOnInit() {
   // Router.navigate();
  }

}
