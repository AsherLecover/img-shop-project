import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  startDate = new Date(1990, 0, 1);

  constructor() { }

  ngOnInit(): void {
  }

}
