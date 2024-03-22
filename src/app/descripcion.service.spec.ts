import { TestBed } from '@angular/core/testing';

import { descripcionService } from './descripcion.service';

describe('descripcionService', () => {
  let service: descripcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(descripcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});