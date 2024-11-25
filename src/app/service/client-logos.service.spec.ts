import { TestBed } from '@angular/core/testing';

import { ClientLogosService } from './client-logos.service';

describe('ClientLogosService', () => {
  let service: ClientLogosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientLogosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
