import { TestBed, inject } from '@angular/core/testing';

import { MostrarDatosService } from './mostrarDatos.service';

describe('MostrardatosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MostrarDatosService]
    });
  });

  it('should be created', inject([MostrarDatosService], (service: MostrarDatosService) => {
    expect(service).toBeTruthy();
  }));
});
