import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaComponent } from './pagina.component';
import { RouterTestingModule } from '@angular/router/testing';
import { EntradasService } from '../../servicios/entradas.service';
import { HttpClientModule } from '@angular/common/http';

describe('PaginaComponent', () => {
  let component: PaginaComponent;
  let fixture: ComponentFixture<PaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientModule],
      declarations: [ PaginaComponent ],
      providers: [RouterTestingModule,
      EntradasService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
