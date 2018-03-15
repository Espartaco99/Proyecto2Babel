import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRoutingModule } from './about-routing.module';
import { AutoresComponent } from './autores/autores.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MuestraDatosComponent } from './muestra-datos/muestra-datos.component';
import { FormsModule } from '@angular/forms';
import { MostrarDatosService } from '../servicios/mostrarDatos.service';
import { AboutComponent } from './about.component';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Datos } from '../modelos/datos';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AboutRoutingModule,
        FormsModule,
        RouterTestingModule,
      ],
      declarations: [ AboutComponent,
        AutoresComponent,
        FormularioComponent,
         MuestraDatosComponent ],
         providers: [
           MostrarDatosService,
           RouterTestingModule
         ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
