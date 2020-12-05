import { TestBed } from '@angular/core/testing';

import { PrivateAreaService } from './private-area.service';

describe('PrivateAreaService', () => {
  let service: PrivateAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivateAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
