import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ManagementService {
  subId: number;

  constructor(private http: HttpClient) {}

  getSubjectImgesById() {
    return this.http.get<any>(
      `${environment.apiUrl}management`
    );
  }
}
