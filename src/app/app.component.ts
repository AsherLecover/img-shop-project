import { Component, OnInit } from '@angular/core';
import { ClinetsService } from './servises/clinets.service';

 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Pic Pictre';

  constructor(
    private svcClinet:ClinetsService
  ){ }

  ngOnInit(): void {
    this.svcClinet.getusernamePaylowdData()

  }
  
}
