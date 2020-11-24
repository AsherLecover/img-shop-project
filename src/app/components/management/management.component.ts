import { Component, Input, OnInit } from '@angular/core';
import { ManagementService } from '../../servises/management.service';
import { Validators,FormBuilder,FormGroup,FormControl } from '@angular/forms';


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
  editMode: boolean = false
  deleteMode: boolean = false
  massage: string = '';
  imgSelected: imgModel;
  imgUrl: string;
  deleteOrEditBtnName:string = ''
  idOfImgToDeleteOrEdit: number;
  editImgForm: FormGroup;


  // selectedIdSubject: number = 0;

  constructor(
    private managementService: ManagementService,
    private fb: FormBuilder,
    ) { }

   
 
  ngOnInit(): void {
  
   }

  selectSubject(event: any) {
    this.managementService
      .getSubjectImgesById(event.target.value)
      .subscribe((data: imgModel[]) => {
        this.imgasListFromServer = data;
        console.log(data);
      });
  }

  deleteOption(id) {
    this.alertBox = true;
    this.deleteMode = true;
    this.editMode = false;
    this.massage = '? האם אתה בטוח שברצונך רוצה למחוק תמונה זו '
    this.deleteOrEditBtnName = 'אשר'
    this.idOfImgToDeleteOrEdit = id
  }

  deleteImgFromServer(id){
    id = this.idOfImgToDeleteOrEdit;
    this.managementService.deleteImg(id).subscribe( data => {
    })
  }

  editImgFromServer(id,imgDetailsToUpdate){
    id = this.idOfImgToDeleteOrEdit;
    console.log('ffffffffffffff', JSON.stringify( imgDetailsToUpdate));
    
    // imgDetailsToUpdate = this.editImgForm.value
    this.managementService.editImgFromServer(id,imgDetailsToUpdate).subscribe( (data) =>{
      console.log('data after updete:', data);
      
    })
    

  }

  editOption(id) {
    this.imgSelected = this.imgasListFromServer.find((img) => img.id == id)
    this.idOfImgToDeleteOrEdit = this.imgSelected.id;
    this.imgUrl= this.imgSelected.imgUrl 
    this.alertBox = true;
    this.editMode = true;
    this.deleteMode = false;
    this.massage = 'ניתן לערוך כל אחד מן השדות הללו '
    this.deleteOrEditBtnName = 'שמירת שינויים'
    this.editImgForm = this.fb.group({
      photographer: [this.imgSelected.photographer,[Validators.required, Validators.minLength(2), Validators.pattern('^[0-9]+$')]],
      imgDes: [this.imgSelected.imgDes,[Validators.required]],
      price: [this.imgSelected.price,[Validators.required, Validators.minLength(2)]],
      imgLongDes:  [this.imgSelected.imgLongDes,[Validators.required, Validators.pattern('^[ 0-9]*$'), Validators.minLength(17)]],
      imgUrl: [this.imgSelected.imgUrl,[Validators.required]]});
  }

  onClose() {
    this.alertBox = false;
    if(this.deleteMode){
      this.deleteImgFromServer(this.idOfImgToDeleteOrEdit)
    }
    else if(this.editMode){
      console.log('img ddddddd',  this.editImgForm.value);
      

      this.editImgFromServer(this.idOfImgToDeleteOrEdit, this.editImgForm.value)
      
    }
  }

  save(event) {
    this.imgUrl = event.target.value
  }
}

export interface imgModel {
  id: number
  imagesSubject: string
  imgDes: string
  imgLongDes: string
  imgUrl: string
  img_id: number
  numOfItems: number
  photographer: string
  price: string
  subId: string

}
