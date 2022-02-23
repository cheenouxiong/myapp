import { TestBed } from '@angular/core/testing';

import { OnlineinventoryService } from './onlineinventory.service';

describe('OnlineinventoryService', () => {
  let service: OnlineinventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineinventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
