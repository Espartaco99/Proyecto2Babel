import { Injectable } from '@angular/core';
import { Datos } from '../modelos/datos';

@Injectable()
export class MostrarDatosService {
   datos: Datos;
    constructor() {

    }
    enviarDatos(datos) {
        console.dir(datos);
       this.datos = datos;
       console.dir(this.datos);
    }
    recibirDatos() {
        return this.datos;
    }
}

