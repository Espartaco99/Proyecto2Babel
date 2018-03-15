import { Component, OnInit } from '@angular/core';
import { MostrarDatosService } from '../../servicios/mostrarDatos.service';
import { Datos } from '../../modelos/datos';

@Component({
  selector: 'bbl-muestra-datos',
  templateUrl: './muestra-datos.component.html',
  styleUrls: ['./muestra-datos.component.css']
})
export class MuestraDatosComponent implements OnInit {
  datosD: Datos;

  constructor(public rDatos: MostrarDatosService) { }

  ngOnInit() {
    this.datosD = {
      nombre: '',
      email: '',
      checkbox: '',
      opinionDatos: '',
      experienciaDatos: '',
    };
    this.rDatos.recibirDatos().then((r: any ) => this.datosD = r);
    console.dir(this.datosD);
  }

}
