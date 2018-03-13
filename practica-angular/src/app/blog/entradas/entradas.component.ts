import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'bbl-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  listaEntradas: string[];

  sTitle: string;
  sEtiquetaBtn: string;
  @Input() aItems: Array<any>;
  @Output() outBorrarItem: EventEmitter<number>;

  constructor() {
    this.outBorrarItem = new EventEmitter();
   }

  ngOnInit() {
    this.listaEntradas = [];
    this.sTitle = 'Contactos personales';
    this.sEtiquetaBtn = 'Eliminar';
  }
  deleteItem(i) {
    this.outBorrarItem.emit(i);
  }
}
