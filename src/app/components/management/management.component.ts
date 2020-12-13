import { Component, Input, OnInit } from '@angular/core';
import { ManagementService } from '../../servises/management.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ImgModel } from 'src/app/models/img-model';


@Component({
  selector: 'management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],
})
export class ManagementComponent implements OnInit {
  subjectList = [
    { id: 1, value: 'תמונות רבנים' },
    { id: 2, value: 'תמונות אבסטרקט' },
    { id: 3, value: 'תמונות טבע' },
    { id: 4, value: ' תמונות של ים' },
    { id: 5, value: ' אורבני' },
    { id: 6, value: ' שחור לבן' },
    { id: 7, value: ' זריחות ושקיעות' },
    { id: 8, value: ' פרחים' },
    { id: 9, value: ' תמונות לפינת אוכל' },
    { id: 10, value: ' פריחה' },
    { id: 11, value: ' תמונות לחדר ילדים' },
    { id: 12, value: ' טבע דומם' },
    { id: 13, value: ' אביב' },
    { id: 14, value: 'ירוק ' },
    { id: 15, value: 'צלליות ' },
    { id: 16, value: ' אנשים' },
    { id: 17, value: ' סתיו' },
    { id: 18, value: ' תמונות פנורמיות' },
    { id: 19, value: ' פיסול באבן' },
    { id: 20, value: 'תמונות נוף' },
  ];
  imgasListFromServer: imgModel[];
  alertBox: boolean = false;
  editMode: boolean = false;
  deleteMode: boolean = false;
  addMode: boolean = false;
  massage: string = '';
  imgSelected: imgModel;
  imgUrl: string;
  deleteOrEditBtnName: string = ''
  idOfImgToAddDeleteEdit: number;
  editImgForm: FormGroup;
  categorySelected: string = ''
  subId: number;

  constructor(
    private managementService: ManagementService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.managementService.imgData$.subscribe( (data) => {
      this.imgasListFromServer = data;
})



    this.editImgForm = this.fb.group({
      photographer: ['', [Validators.required]],
      imgDes: ['', [Validators.required]],
      price: ['', [Validators.required]],
      imgLongDes: ['', [Validators.required]],
      imgUrl: ['', [Validators.required]]
    });
  }


  selectSubject(event: any) {

    this.managementService.getSubjectImgesById(event.target.value)
      .subscribe((data: any) => {
        
        this.imgasListFromServer = data;
        this.managementService.imgData$.next(this.imgasListFromServer)
        this.idOfImgToAddDeleteEdit = event.target.value;
        this.subId = event.target.value;
        this.imgSelected = data.find((img) => img.subId ==  this.idOfImgToAddDeleteEdit);
        this.categorySelected = data[0].imagesSubject;
      
      });
  }

  deleteOption(id) {
    this.alertBox = true;
    this.deleteMode = true;
    this.editMode = false;
    this.addMode = false;
    this.massage = '? האם אתה בטוח שברצונך רוצה למחוק תמונה זו '
    this.deleteOrEditBtnName = 'אשר'
    this.idOfImgToAddDeleteEdit = id
  }

  deleteImgFromServer(id) {

    id = this.idOfImgToAddDeleteEdit;
    console.log(this.subId);
    
    this.managementService.deleteImg(id, this.subId).subscribe( (data:any) => {

      this.managementService.imgData$.next(data)

    })
  }

  editImgFromServer(id, imgDetailsToUpdate) {
    id = this.idOfImgToAddDeleteEdit;
    this.managementService.editImgFromServer(id, imgDetailsToUpdate, this.subId).subscribe(() => {
    })
  }

  addOption() {
    this.massage = ` הוספת תמונה בקטגוריית ${this.categorySelected}`
    this.subId = this.imgSelected.subId;
    this.alertBox = true
    this.addMode = true;
    this.deleteMode = false;
    this.editMode = false;
    this.deleteOrEditBtnName = ' הוספה לאתר'


    this.editImgForm = this.fb.group({
      photographer: ['', [Validators.required]],
      imgDes: ['', [Validators.required]],
      price: ['', [Validators.required]],
      imgLongDes: ['', [Validators.required,]],
      imgUrl: ['', [Validators.required]]
    });
  }

  addImgToServer() {
   let imgDataToAdd = this.editImgForm.value;
   imgDataToAdd.imagesSubject = this.categorySelected;
   imgDataToAdd.subId = this.subId;
   imgDataToAdd.numOfItems = 1;
   imgDataToAdd.ownerId = 1

   imgDataToAdd.img_id = this.imgasListFromServer.length+1;
   console.log('imgDataToAdd:', imgDataToAdd);
   

   
    this.managementService.addImgToServer(imgDataToAdd).subscribe( (data:any) => {
      this.managementService.imgData$.next(data)

      
    })
   }

  editOption(id) {
    this.imgSelected = this.imgasListFromServer.find((img) => img.id == id);

    this.idOfImgToAddDeleteEdit = this.imgSelected.id;
    this.imgUrl = this.imgSelected.imgUrl
    this.alertBox = true;
    this.editMode = true;
    this.deleteMode = false;
    this.addMode = true;
    this.massage = 'ניתן לערוך כל אחד מן השדות הללו ';
    this.deleteOrEditBtnName = 'שמירת שינויים';

    this.editImgForm = this.fb.group({
      photographer: [this.imgSelected.photographer, [Validators.required]],
      imgDes: [this.imgSelected.imgDes, [Validators.required]],
      price: [this.imgSelected.price, [Validators.required]],
      imgLongDes: [this.imgSelected.imgLongDes, [Validators.required]],
      imgUrl: [this.imgSelected.imgUrl, [Validators.required]]
    });
  }

  onClose() {
    this.alertBox = false;
    if (this.deleteMode) {  
      this.deleteImgFromServer(this.idOfImgToAddDeleteEdit)
    }
    else if (this.editMode) {
      this.editImgFromServer(this.idOfImgToAddDeleteEdit, this.editImgForm.value)
    }
    else if (this.addMode) {
      this.addImgToServer()
    }
  }

  onCloseBox(){
    this.alertBox = false;
  }

  save(event) {
    this.imgUrl = event.target.value
  }
}

export interface imgModel {
  id: number
  ownerId: number;
  imagesSubject: string
  imgDes: string
  imgLongDes: string
  imgUrl: string
  img_id: number
  numOfItems: number
  photographer: string
  price: string
  subId: number

}
