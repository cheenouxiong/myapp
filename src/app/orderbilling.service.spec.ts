import { TestBed } from '@angular/core/testing';

import { OrderbildingService } from './orderbilling.service';

describe('OrderbildingService', () => {
  let service: OrderbildingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderbildingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
