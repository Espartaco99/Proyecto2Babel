import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entradas } from '../../modelos/entradas';
import { EntradasService } from '../../servicios/entradas.service';



@Component({
  selector: 'bbl-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  @Input() listaEntradas: Entradas[];

  sTitle: string;
  sEtiquetaBtn: string;
  @Output() outBorrarItem: EventEmitter<number>;

  constructor(public entradasService: EntradasService) {
    this.outBorrarItem = new EventEmitter();
   }

  ngOnInit() {
    this.listaEntradas = [];
    this.entradasService.getEntradas()
    .then((value) => { this.listaEntradas = value; })
    .catch(() => alert('Fallo en entradas components, bbdd no inicializada o no existe entradas'));
      console.log(this.listaEntradas);
    /* this.sTitle = 'Contactos personales';
    this.sEtiquetaBtn = 'Eliminar'; */
  }
  /* deleteItem(i) {
    this.outBorrarItem.emit(i);
  } */
}
