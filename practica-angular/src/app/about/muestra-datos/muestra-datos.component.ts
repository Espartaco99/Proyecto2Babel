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
  public nombre: string;
  public email: string;
  public checkbox: string;
  public opinionDatos: string;
  public experienciaDatos: any;
  constructor(public rDatos: MostrarDatosService) { }

  ngOnInit() {
    this.datosD = {
      nombre: '',
      email: '',
      checkbox: '',
      opinionDatos: '',
      experienciaDatos: '',
    };
    this.datosD = this.rDatos.recibirDatos();
    console.dir(this.datosD);
    this.nombre = this.datosD.nombre;
    this.email = this.datosD.email;
    this.checkbox = this.datosD.checkbox;
    this.opinionDatos = this.datosD.opinionDatos;
    this.experienciaDatos = this.datosD.experienciaDatos;
  }

}
