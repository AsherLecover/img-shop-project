import { Component, OnInit } from '@angular/core';
import { ImgSubListService } from '../../servises/img-sub-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  imagesList = [];
  public imgId;
  ingUrlToBedisplay: string;
  desToBeDisplay: string


  constructor(public svc: ImgSubListService, private route: ActivatedRoute) {
    this.imagesList = svc.imgListOrderBySobjects
    this.ingUrlToBedisplay = this.svc.imgurlSelected;
    this.desToBeDisplay = this.svc.imgDescription;
   }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.imgId = id;
  }

}
