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

   /*  this.nombre = document.getElementById('nombre').value;
     this.email = document.getElementById('email').value;
     this.aRadio = document.getElementsByName('experiencia');
     for (let i = 0; i < this.aRadio.length; i++) {
         if (this.aRadio[i].checked) {
              this.experienciaDatos = this.aRadio[i].value;
     }
     }
     this.checkbox = document.getElementById('checkbox').checked ? 'Si' : 'No';
     this.opinionDatos = document.getElementById('coment').value;*/

    localStorage.setItem('nombre',  this.nombre);
    localStorage.setItem('email',  this.email);
    localStorage.setItem('experiencia',  this.experienciaDatos);
    localStorage.setItem('opinion',  this.opinionDatos);
    localStorage.setItem('recibirNoticias',  this.checkbox);
    this.datos = {nombre: this.nombre, email : this.email, checkbox: this.checkbox,
       opinionDatos: this.opinionDatos, experienciaDatos: this.experienciaDatos};

       this.eDatos.enviarDatos(this.datos);
    this.router.navigate(['about/muestra-datos']);
    /*document.getElementById('nombreDatos').innerHTML = ` ${nombre}`;
    document.getElementById('emailDatos').innerHTML = ` ${email}`;
    document.getElementById('experienciaDatos').innerHTML = ` ${experienciaDatos}`;
    document.getElementById('opinionDatos').innerHTML = ` ${opinionDatos}`;
    document.getElementById('checkboxDatos').innerHTML = ` ${checkbox}`;*/
 }
}
