import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import data from '@iconify/icons-mdi/home';
import { ImgDataService } from 'src/app/servises/img-data.service';
import { ImgSubListService } from '../../servises/img-sub-list.service';
import { ImgSubjectDataService } from '../../servises/img-subject-data.service';
import jwt_decode from 'jwt-decode';
import { BuyingProcessService } from 'src/app/servises/buying-process.service';


@Component({
  selector: 'app-pic-sub-main-page',
  templateUrl: './pic-sub-main-page.component.html',
  styleUrls: ['./pic-sub-main-page.component.css']
})
export class PicSubMainPageComponent implements OnInit {
  imgIdListSubject: number;
  isActive: boolean = false;
  cardImgList:any = []
  user_id = null
  userBag

  

  constructor(private router: Router,
    private route: ActivatedRoute,
    public svc: ImgSubListService,
    private imgSubSVC: ImgSubjectDataService,
    private imgDataService: ImgDataService,
    public buyerSvc: BuyingProcessService,

    ) { }

  ngOnInit(): void {
    this.getPaylowdData()
    //lowding in main page user bag if there is valid token
    this.imgDataService.getBagInHomePage(this.user_id).subscribe(
      (data:[]) => {
        this.userBag = data
        console.log('main page user bag: ', this.userBag.length);
        this.buyerSvc.sumOfItems.next(data.length) 
      }
    )
    
    this.svc.imgSubList = this.cardImgList;
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.imgIdListSubject = id;
    
    // lowding home page images
    this.imgSubSVC.getAllSubjectsImg().subscribe( (data:[]) => {
      // this.buyerSvc.sumOfItems.next(data.length) 


      this.cardImgList = data;
      this.imgSubSVC.lliisstt = data

    })
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
  
  getPaylowdData(){
    if (
      this.getDecodedAccessToken(localStorage.getItem('accessToken')) != null
    ) {
      this.user_id = this.getDecodedAccessToken(
        localStorage.getItem('accessToken')
      ).id;
    }
  }

  onImgSubjectSelect(imgIdSubject){
    this.router.navigate(['/pic-main-list-subjects'  ,imgIdSubject])
  }

}
