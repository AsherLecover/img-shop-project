import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from './private-area.service';

@Injectable({
  providedIn: 'root'
})
export class ChatMessagesService {
  massegsesMode$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  allUsers$: BehaviorSubject<UserModel[]> = new BehaviorSubject(null);

  // this.privateAreaService.getAllUsers().subscribe((data) => {
  //   this.allUsers = data;
  // });

  
  constructor(private http:HttpClient) { }

  getAllUsers() {
    return this.http.get(`${environment.apiUrl}/private-area`)
  }


  sendMessageToServer(msg) {
    console.log(" return  this.http.post ");
    
    return this.http.post(`${environment.apiUrl}/chat-messages`,{msg})
  }

  getMessages(sender_id, resiver_id){
    return this.http.get(`${environment.apiUrl}/chat-messages/${sender_id.toString()}/${resiver_id.toString()}`)
  }

}
