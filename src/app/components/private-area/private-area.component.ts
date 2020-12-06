import { Component, OnInit } from '@angular/core';
import { imgModel } from '../management/management.component';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PrivateAreaService } from '../../servises/private-area.service'

@Component({
  selector: 'private-area',
  templateUrl: './private-area.component.html',
  styleUrls: ['./private-area.component.css']
})
export class PrivateAreaComponent implements OnInit {

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
  addImgAlertBox: boolean = false;
  imgPerSubjectLength: number = 0
  
  constructor(
    private privateAreaService: PrivateAreaService,
    private fb: FormBuilder) { }
    
    ngOnInit(): void {
      console.log('userrrrrr:', this.privateAreaService.getUserId());
      
      
      this.editImgForm = this.fb.group({
        photographer: ['', [Validators.required]],
        imgDes: ['', [Validators.required]],
        price: ['', [Validators.required]],
        imgLongDes: ['', [Validators.required]],
        imgUrl: ['', [Validators.required]]
      });
    }
    
    selectManageImgOption() {
      // console.log('event.target.value: ', event.target.value);
      // this.selectSubject(event.target.value)
      this.privateAreaService.getAllImgByUserId().subscribe((data: any) => {
        console.log('data per userrrr:', data);
        this.imgasListFromServer = data
      })
    }

    ManageImgOption() {
    this.alertBox = true;
    this.addMode = false;
    this.selectManageImgOption()
  }

  
  addOption(){
    this.addMode = true;
    this.addImgAlertBox = true;
    this.editImgForm = this.fb.group({
      photographer: ['', [Validators.required]],
      imgDes: ['', [Validators.required]],
      price: ['', [Validators.required]],
      imgLongDes: ['', [Validators.required,]],
      imgUrl: ['', [Validators.required]]
    });
    this.deleteOrEditBtnName = ' הוספה לאתר'
    
  }
  addImgSelected(event: any){
    console.log('event: ', event.target.value);
    this.privateAreaService.getAllSubjectImgesById(event.target.value).subscribe( (data:[]) => {
      console.log('data img per subject', data);
      this.imgPerSubjectLength = data.length

      
      
    })
    this.subId = event.target.value;
    
  }

  addImgToServer(){
    let imgDataToAdd = this.editImgForm.value;
   imgDataToAdd.imagesSubject = this.subjectList[this.subId-1].value;
   imgDataToAdd.subId = this.subId;
   imgDataToAdd.numOfItems = 1;
   imgDataToAdd.ownerId = this.privateAreaService.getUserId()
   imgDataToAdd.img_id = this.imgPerSubjectLength;
   console.log('imgDataToAdd:', imgDataToAdd);
    console.log('this.editImgForm.value', this.editImgForm.value);
    this.privateAreaService.addImg(imgDataToAdd).subscribe( (data) => {
      console.log(data);
      
    })

     
  }
  
  onCloseAddAlertBox() {
    this.addImgAlertBox = false;
  }

  deleteOption(id) {
    console.log('asher');
    console.log('asher', id);
    
    this.alertBox = true;
    this.deleteMode = true;
    this.editMode = false;
    this.addMode = false;
    this.massage = '? האם אתה בטוח שברצונך רוצה למחוק תמונה זו '
    this.deleteOrEditBtnName = 'אשר'
    this.idOfImgToAddDeleteEdit = id
  }

  deleteFromServer(imgId: any) {
    this.privateAreaService.deleteFromServer(imgId).subscribe( data=> {
      console.log(data);
      
    })
  }
  
  onClose() {
    this.alertBox = false;
    if(this.addMode){
      this.addImgToServer()
    }
    else if(this.deleteMode){
      this.alertBox = true;
      this.deleteFromServer(this.idOfImgToAddDeleteEdit)
    }
  }
  onCloseDeleteAlertBox(){
    this.deleteMode = false;
  }
  
}
