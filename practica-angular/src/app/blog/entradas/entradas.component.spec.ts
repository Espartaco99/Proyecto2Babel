import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasComponent } from './entradas.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FormularioComponent } from '../formulario/formulario.component';
import { EntradasService } from '../../servicios/entradas.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('EntradasComponent', () => {
  let component: EntradasComponent;
  let fixture: ComponentFixture<EntradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ EntradasComponent,
      FormularioComponent ],
      providers: [RouterTestingModule,
      EntradasService,
      HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
