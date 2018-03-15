import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraDatosComponent } from './muestra-datos.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MostrarDatosService } from '../../servicios/mostrarDatos.service';

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
        MuestraDatosComponent
      ],
      providers: [
        MostrarDatosService,
      RouterTestingModule]
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
