import { TestBed } from '@angular/core/testing';

import { ChineseseviceService } from './chinesesevice.service';

describe('ChineseseviceService', () => {
  let service: ChineseseviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChineseseviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
