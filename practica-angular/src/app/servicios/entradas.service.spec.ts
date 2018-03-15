import { TestBed, inject } from '@angular/core/testing';

import { EntradasService } from './entradas.service';
import { HttpClientModule } from '@angular/common/http';

describe('EntradasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [EntradasService]
    });
  });

  it('should be created', inject([EntradasService], (service: EntradasService) => {
    expect(service).toBeTruthy();
  }));
});
