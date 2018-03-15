import { TestBed, inject } from '@angular/core/testing';

import { EntradasService } from './entradas.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('EntradasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        EntradasService,
         HttpClientModule]
    });
  });

  it('should be created', inject([EntradasService], (service: EntradasService) => {
    expect(service).toBeTruthy();
  }));
});
