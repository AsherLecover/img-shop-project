import { Component, OnInit } from '@angular/core';
import { imgModel } from '../management/management.component';
import { Validators, FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';
import { PrivateAreaService } from '../../servises/private-area.service'

import * as io from 'socket.io-client';


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
  massegsesMode: boolean = false
  massage: string = '';
  imgSelected: imgModel;
  imgUrl: string;
  deleteOrEditBtnName: string = ''
  idOfImgToEdit: number;
  editImgForm: FormGroup;
  chatMessageForm: FormGroup;

  categorySelected: string = ''
  subId: number;
  addImgAlertBox: boolean = false;
  imgPerSubjectLength: number = 0;
  subjetSelected: string = ''
  userAllData
  socket = null;
  messageData:string[] = []
  
  constructor(
    private privateAreaService: PrivateAreaService,
    private fb: FormBuilder) { }
    
    ngOnInit(): void {
      this.chatMessageForm = this.fb.group({
        message: ['', [Validators.required]],

      })


      this.privateAreaService.imgData$.subscribe( (data) => {
        this.imgasListFromServer = data;
  })
      console.log('userrrrrr:', this.privateAreaService.getUserId());
      console.log('userrrrr ALL DATA:', this.privateAreaService.user);
      this.userAllData = this.privateAreaService.user
      
      
      
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
    this.deleteMode = false;
    this.editMode = false;
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
    this.addMode = false;

     
  }
  
  onCloseAddAlertBox() {
    this.addImgAlertBox = false;
    this.alertBox = false;
    this.addMode = false;
    console.log(4332153465746643534);
    
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
    this.idOfImgToEdit = id
  }

  deleteFromServer(imgId: any) {
    this.privateAreaService.deleteFromServer(imgId).subscribe( data=> {
      console.log(data);
      this.privateAreaService.imgData$.next(data)
    })
    this.deleteMode = false;
  }

  editOption(id) {
    this.imgSelected = this.imgasListFromServer.find((img) => img.id == id);

    this.idOfImgToEdit = this.imgSelected.id;
    this.imgUrl = this.imgSelected.imgUrl
    this.alertBox = true;
    this.editMode = true;
    this.deleteMode = false;
    this.addMode = false;
    this.subjetSelected = this.imgSelected.imagesSubject

    this.editImgForm = this.fb.group({
      photographer: [this.imgSelected.photographer, [Validators.required]],
      imgDes: [this.imgSelected.imgDes, [Validators.required]],
      price: [this.imgSelected.price, [Validators.required]],
      imgLongDes: [this.imgSelected.imgLongDes, [Validators.required]],
      imgUrl: [this.imgSelected.imgUrl, [Validators.required]]
    });
  }

  editImgToServer(id, imgDetailsToUpdate) {
    console.log('edit id', id);
    console.log('edit imgDetailsToUpdate', imgDetailsToUpdate);
    
    id = this.idOfImgToEdit;
    this.privateAreaService.editImgToServer(id, imgDetailsToUpdate).subscribe((data:any) => {
      this.privateAreaService.imgData$.next(data)
    })
    this.editMode = false;
  }
  
  onClose() {
    this.alertBox = false;
    if(this.addMode){
      this.deleteMode = false;
      this.editMode = false;
      this.addImgToServer()
    }
    else if(this.deleteMode){
      this.addMode = false;
      this.editMode = false;
      
      this.alertBox = true;

      this.deleteFromServer(this.idOfImgToEdit)
    }
    else if(this.editMode){
      this.addMode = false;
      this.deleteMode = false;
      console.log('edittt mode::', this.editMode);
      
      
      this.alertBox = true;
      this.editImgToServer(this.idOfImgToEdit, this.editImgForm.value)
    }
  }
  onCloseDeleteAlertBox(){
    this.deleteMode = false;
  }

  onCloseEditAlertBox(){
    this.editMode = false;
  }

  massagesBtweenUsersOption(){
    this.massegsesMode = true;
  }
  onClosemassagesBox(){
    this.massegsesMode = false;
  }


  listen() {
    this.socket = io('http://localhost:3000', {});
   
    this.socket.on('msgToServer', messages => {
      console.log('fuck off', this.massage);
      
      // this.messages.next(messages);
    })
  }

  a(){
    this.socket.on('msgToClinet', (messageData) => {
      if (messageData.error) { }
      this.messageData.push(messageData)
      console.log('fuck off 2', messageData);
    });
  }

  sendMessage() {
    this.listen()
    let megToServer = this.chatMessageForm.value.message;
    console.log('from input:', megToServer);
    
    // messageForm.reset();
    this.socket.emit('msgToServer', megToServer );
    this.a()
    this.messageData = []
  }
  
}
