import { TestBed } from '@angular/core/testing';

import { ClinetsService } from './clinets.service';

describe('ClinetsService', () => {
  let service: ClinetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
