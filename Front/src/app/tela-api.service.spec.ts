import { TestBed } from '@angular/core/testing';

import { TelaApiService } from './service/tela-api.service';

describe('TelaApiService', () => {
  let service: TelaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
