import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraDatosComponent } from './muestra-datos.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MostrarDatosService } from '../../servicios/mostrarDatos.service';
import { AboutComponent } from '../about.component';
import { AutoresComponent } from '../autores/autores.component';
import { FormularioComponent } from '../formulario/formulario.component';

describe('MuestraDatosComponent', () => {
  let component: MuestraDatosComponent;
  let fixture: ComponentFixture<MuestraDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      declarations: [
        AboutComponent,
        AutoresComponent,
        FormularioComponent,
        MuestraDatosComponent
      ],
      providers: [
        MostrarDatosService,
        RouterTestingModule
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
