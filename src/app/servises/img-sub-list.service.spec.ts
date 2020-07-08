import { TestBed } from '@angular/core/testing';

import { ImgSubListService } from './img-sub-list.service';

describe('ImgSubListService', () => {
  let service: ImgSubListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgSubListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
