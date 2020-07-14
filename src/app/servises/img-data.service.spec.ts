import { TestBed } from '@angular/core/testing';

import { ImgDataService } from './img-data.service';

describe('ImgDataService', () => {
  let service: ImgDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
