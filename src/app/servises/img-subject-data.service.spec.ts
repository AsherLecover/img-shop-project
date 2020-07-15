import { TestBed } from '@angular/core/testing';

import { ImgSubjectDataService } from './img-subject-data.service';

describe('ImgSubjectDataService', () => {
  let service: ImgSubjectDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgSubjectDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
