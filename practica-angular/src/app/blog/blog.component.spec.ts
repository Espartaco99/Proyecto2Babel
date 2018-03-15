import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { EntradasService } from '../servicios/entradas.service';
import { PaginaComponent } from './pagina/pagina.component';
import { EntradasComponent } from './entradas/entradas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [BlogComponent,
         FormularioComponent,
          EntradasComponent,
           PaginaComponent],
      providers: [
        EntradasService,
        HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
