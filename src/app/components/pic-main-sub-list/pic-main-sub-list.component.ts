import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImgSubListService } from '../../servises/img-sub-list.service';
import { BuyingProcessService } from '../../servises/buying-process.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ImgDataService } from '../../servises/img-data.service';
import { ImgSubjectDataService } from '../../servises/img-subject-data.service';

ImgDataService

@Component({
  selector: 'app-pic-main-sub-list',
  templateUrl: './pic-main-sub-list.component.html',
  styleUrls: ['./pic-main-sub-list.component.css']
})
export class PicMainSubListComponent implements OnInit {
  public imgIdListSubject: number;
  public listOfItemsInBag: any[] = []
  public imgListSubject: string =  ""
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  imgListBySubjects = []


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public svc: ImgSubListService,
    public buyingSvc: BuyingProcessService,
    private _snackBar: MatSnackBar,
    private imgDataSVC: ImgDataService,
    private imgSubDataSVC: ImgSubjectDataService
  ) {
    this.svc.imgListOrderBySobjects = this.imgListBySubjects;
    this.imgListBySubjects = this.imgDataSVC.imgDataList.imgListBySubjects;

  }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.imgIdListSubject = id;
    this.imgSubDataSVC.imgSubIddddd = id;
    console.log('img shjkhkjhkjuuub id', this.imgSubDataSVC.imgSubIddddd);

    //---------------server side--------------
    this.svc.getImgById(this.imgSubDataSVC.imgSubIddddd).subscribe( data => {
      console.log('data from server:', data);
      
    })
    
    
  
    
  }

  onImgSelected(img) {
    this.router.navigate(['/img-details',this.imgIdListSubject,  img.imgId])
    this.svc.imgurlSelected = img.imgUrl;
    this.svc.imgDescription = img.imgDes;
    this.svc.imgPrice = img.price
    this.svc.photographer = img.photographer;
    this.svc.imgLongDes = img.imgLongDes;
  }
  omImgSelectedToBuy(img) {
    let id = this.buyingSvc.itemImgIdToBeDisplayInBag = img.imgId;
    let des = this.buyingSvc.itemImgDesToBeDisplayInBag = img.imgDes;
    let price = this.buyingSvc.itemImgPriceToBeDisplayInBag = img.price;
    let originalPrice = this.buyingSvc.itemImgPriceToBeDisplayInBag = img.price;
    let url = this.buyingSvc.itemImgUrlToBeDisplayInBag = img.imgUrl;
    let numOfItems = this.buyingSvc.numOfItems;
    this.buyingSvc.listOfItemToBeDisplay.push(
      [{id: id,des: des,price: price, url: url, numOfItems: numOfItems, originalPrice: originalPrice}]);
 
    this.buyingSvc.itemAmount += 1;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
