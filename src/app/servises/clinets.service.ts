import { Injectable } from '@angular/core';
import { ClinetModel } from '../models/clinet-model/clinetModel';

@Injectable({
  providedIn: 'root'
})
export class ClinetsService {
  clinetList: ClinetModel[]
  userName: string = ' אורח';
  

  constructor() { }
}
