import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { EntradasService } from '../../servicios/entradas.service';
import { Entradas } from '../../modelos/entradas';

@Component({
  selector: 'bbl-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @ViewChild('formEntradas') formUser: any;
  entrada: Entradas;
  validado: Object;
  @Output() outAddEntrada: EventEmitter<Entradas>;
  constructor(public entradasService: EntradasService) {
    this.outAddEntrada = new EventEmitter();
   }

  ngOnInit() {
    this.resetEntrada();
    this.validado = {'was-validated': true};
    console.log(this.formUser);
  }
  enviar() {
    console.log('Datos enviados');

    this.outAddEntrada.emit(this.entrada);
    console.log(this.entrada);
    this.resetEntrada();
    this.formUser.reset();
    // this.entradasService.setEntrada();
  }
  btnBorrar() {
      this.formUser.reset();
  }
  private resetEntrada() {
      this.entrada = {id: undefined, autor: '', email: '', titulo: '', texto: '', palabrasClave: []};
  }
}
