import { Injectable } from '@angular/core';
import { Datos } from '../modelos/datos';

@Injectable()
export class MostrarDatosService {
   datos: Datos;
    constructor() {

    }
    enviarDatos(datos) {
        this.datos = datos;
      }
    recibirDatos() {
        return new Promise((resolve, reject) => {
            resolve(this.datos);
               });
    }


}
