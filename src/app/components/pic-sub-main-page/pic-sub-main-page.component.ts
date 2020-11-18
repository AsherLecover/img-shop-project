import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { ImgSubListService } from '../../servises/img-sub-list.service';
import { ImgSubjectDataService } from '../../servises/img-subject-data.service';


@Component({
  selector: 'app-pic-sub-main-page',
  templateUrl: './pic-sub-main-page.component.html',
  styleUrls: ['./pic-sub-main-page.component.css']
})
export class PicSubMainPageComponent implements OnInit {
  imgIdListSubject: number;
  isActive: boolean = false;
  cardImgList:any = []
  

  constructor(private router: Router,
    private route: ActivatedRoute,
    public svc: ImgSubListService,
    private imgSubSVC: ImgSubjectDataService
    ) { }

  ngOnInit(): void {
    this.svc.imgSubList = this.cardImgList;
    // this.cardImgList = this.imgSubSVC.imgSubjecData.cardImgList;
    // this.cardImgList = this.imgSubSVC.getAllSubjectsImg()
    console.log('id from subject ' + this.route.snapshot.paramMap.get('id'));
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.imgIdListSubject = id;
    
    this.imgSubSVC.getAllSubjectsImg().subscribe( data => {
      this.cardImgList = data;
      this.imgSubSVC.lliisstt = data
      console.log('ALL IMG: ', data);
    })
  }

  onImgSubjectSelect(imgIdSubject){
    console.log('id og img sub user selected: ',imgIdSubject);
    
    this.router.navigate(['/pic-main-list-subjects'  ,imgIdSubject])
  }

  // getBagInHomePage
}
