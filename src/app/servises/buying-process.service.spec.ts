import { TestBed } from '@angular/core/testing';

import { BuyingProcessService } from './buying-process.service';

describe('BuyingProcessService', () => {
  let service: BuyingProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyingProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
