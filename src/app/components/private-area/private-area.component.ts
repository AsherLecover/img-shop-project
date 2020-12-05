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

  constructor(private privateAreaService: PrivateAreaService) { }

  ngOnInit(): void {
  }

  addImgOption() {
    this.alertBox = true;
    this.addMode = true;
    this.selectSubject()
  }
  onClose() {
    this.alertBox = false;
  }

  selectSubject() {
    // console.log('event.target.value: ', event.target.value);
    // this.selectSubject(event.target.value)


    this.privateAreaService.getAllImgByUserId().subscribe((data: any) => {
      console.log('data per userrrr:', data);
      this.imgasListFromServer = data

    })



  }

}
