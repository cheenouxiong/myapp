import { TestBed } from '@angular/core/testing';

import { DatapassService } from './datapass.service';

describe('DatapassService', () => {
  let service: DatapassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatapassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
