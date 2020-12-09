import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatMessagesService {
  
  constructor(private http:HttpClient) { }


  sendMessageToServer(msg) {
    console.log(" return  this.http.post ");
    
    return this.http.post(`${environment.apiUrl}/chat-messages`,{msg})

  }

}
