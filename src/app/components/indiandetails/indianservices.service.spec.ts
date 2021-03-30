import { TestBed } from '@angular/core/testing';

import { IndianservicesService } from './indianservices.service';

describe('IndianservicesService', () => {
  let service: IndianservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndianservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
