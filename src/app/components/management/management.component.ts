import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../servises/management.service';

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
  massage: string = "";
  imgSelected: imgModel;
  imgUrl: string;

  // selectedIdSubject: number = 0;

  constructor(private managementService: ManagementService) { }

  ngOnInit(): void { }

  selectSubject(event: any) {
    // this.selectedIdSubject = event.target.value;
    console.log(event.target.value);
    this.managementService
      .getSubjectImgesById(event.target.value)
      .subscribe((data: imgModel[]) => {
        this.imgasListFromServer = data;
        console.log(data);
      });
  }

  delete(id) {
    console.log('id selected: ', id);

    this.alertBox = true;
    this.editMode = false
    this.massage = '? האם אתה בטוח שברצונך רוצה למחוק תמונה זו '


  }
  edit(id) {
    this.imgSelected = this.imgasListFromServer.find((img) => img.id == id)
    // this.imgSelected.imgUrl = this.imgUrl
    // console.log('img selected: ', this.imgSelected);

    this.alertBox = true;
    this.editMode = true
    this.massage = 'ניתן לערוך כל אחד מן השדות הללו '

  }

  onClose() {
    this.alertBox = false;
  }

  save(event) {
    this.imgUrl = event.target.value
    console.log("You entered: ", event.target.value);
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
