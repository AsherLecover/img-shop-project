import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../servises/management.service'

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
  imgasListFromServer: []

  // selectedIdSubject: number = 0;


  constructor(private managementService: ManagementService) { }

  ngOnInit(): void {



  }

  selectSubject(event: any) {
    // this.selectedIdSubject = event.target.value;
    console.log(event.target.value);
    this.managementService.getSubjectImgesById(event.target.value).subscribe((data) => {
      this.imgasListFromServer = data
      console.log(data);

    })

  }
}



