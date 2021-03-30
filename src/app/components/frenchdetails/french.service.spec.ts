import { TestBed } from '@angular/core/testing';

import { FrenchService } from './french.service';

describe('FrenchService', () => {
  let service: FrenchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrenchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
