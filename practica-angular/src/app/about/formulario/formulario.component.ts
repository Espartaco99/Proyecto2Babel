import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Datos } from '../../modelos/datos';
import { MostrarDatosService } from '../../servicios/mostrarDatos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bbl-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  datos: Datos;
 public nombre: string;
 public email: string;
 public checkbox: string;
 public opinionDatos: string;
 public experienciaDatos: any;
  constructor( public eDatos: MostrarDatosService, private router: Router) { }

  ngOnInit() {
    this.experienciaDatos = false;
  }
  enviarDatos() {
    localStorage.setItem('nombre',  this.nombre);
    localStorage.setItem('email',  this.email);
    localStorage.setItem('experiencia',  this.experienciaDatos);
    localStorage.setItem('opinion',  this.opinionDatos);
    localStorage.setItem('recibirNoticias',  this.checkbox);
    this.datos = {nombre: this.nombre, email : this.email, checkbox: this.checkbox,
       opinionDatos: this.opinionDatos, experienciaDatos: this.experienciaDatos};

    this.eDatos.enviarDatos(this.datos);
    this.router.navigate(['about/muestra-datos']);
 }
}
