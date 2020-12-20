import { Component, HostListener, OnInit } from '@angular/core';
import { ChatMessagesService } from './servises/chat-messages.service';
import { ClinetsService } from './servises/clinets.service';

 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Pic Pictre';
  massegsesMode: boolean = false;
  innerWidth: number;
  isMobile: boolean = false;

  constructor(
    private svcClinet:ClinetsService,
    private chatMessagesService: ChatMessagesService,

  ){ }

  ngOnInit(): void {
  
    this.svcClinet.getusernamePaylowdData()

  }

 
    
  
  
}
