import { TestBed } from '@angular/core/testing';

import { DesignutilityTsService } from './designutility.ts.service';

describe('DesignutilityTsService', () => {
  let service: DesignutilityTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignutilityTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
