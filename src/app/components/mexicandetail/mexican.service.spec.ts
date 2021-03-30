import { TestBed } from '@angular/core/testing';

import { MexicanService } from './mexican.service';

describe('MexicanService', () => {
  let service: MexicanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MexicanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
