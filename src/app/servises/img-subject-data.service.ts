import { Injectable } from '@angular/core';
import { ImgSubjectData } from '../data/img-subject-data';

@Injectable({
  providedIn: 'root'
})
export class ImgSubjectDataService {
  imgSubjecData = new ImgSubjectData()
  imgSubIddddd: number;

  constructor() { }
}
