import { Injectable } from '@angular/core';
import { Entradas } from '../modelos/entradas';
import { HttpClient } from '@angular/common/http';

const URLAPI = 'http://localhost:3000/entradas';
@Injectable()
export class EntradasService {
  private sURL: string;
  private listaEntradas: Array<Entradas>;

  constructor(public http: HttpClient) {
    this.sURL = URLAPI;
    this.listaEntradas = [];
  }

  getEntradas() {
    return this.http.get(this.sURL).toPromise()
    .then((response: any) => {
      this.listaEntradas = response;
      return this.listaEntradas;
    });
  }

  getEntrada(id: number) {
    return this.http.get(this.sURL).toPromise()
    .then((response: any) => {
      this.listaEntradas = response;
      return this.listaEntradas.find(entrada => entrada.id === id);
    });

  }

  setEntrada(entrada) {
      console.log('Enviando datos');
      console.log(entrada);
      return this.http.post(this.sURL, entrada).toPromise();
  }

  getNextId() {
    if (this.listaEntradas.length) {
      return this.listaEntradas[this.listaEntradas.length - 1].id + 1;
    } else {
      return 1;
    }
  }

deleteEntrada(id) {
    return this.http.delete(this.sURL + '/' + id).toPromise();
  }

}
