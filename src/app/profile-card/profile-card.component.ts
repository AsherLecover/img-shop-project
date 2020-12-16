import { Component, OnInit } from '@angular/core';
import { imgModel } from '../components/management/management.component';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
  NgForm,
} from '@angular/forms';
import { PrivateAreaService, UserModel } from '../servises/private-area.service';
import * as io from 'socket.io-client';
import {MessagesModel} from '../components/private-area/messages-model'
import { ClinetsService } from 'src/app/servises/clinets.service';
import { ChatMessagesService } from 'src/app/servises/chat-messages.service';


@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  imgasListFromServer: imgModel[];
  alertBox: boolean = false;
  editMode: boolean = false;
  deleteMode: boolean = false;
  addMode: boolean = false;
  imgUrl: any;
  cardProfileForm: FormGroup;
  addImgAlertBox: boolean = false;
  imgPerSubjectLength: number = 0;
  subjetSelected: string = '';
  userAllData;
  socket = null;
  messageData: MessagesModel[] = [];
  setProfileMode: boolean = false;

  setImgProfileImgMode: boolean = false;
  setProfileProfshanlMode: boolean = false;
  setAboutYouProfileMode: boolean = false;
  setInstagramProfileMode: boolean = false;
  setFacebookProfileMode: boolean = false;
  setLinkedinProfileMode: boolean = false;
  setTwitterProfileMode: boolean = false;
  reciderUserId: number;
  imgUrlProfile:string = ""
  userId
  userData
  profession: string = 'פרסם את המקצוע שלך לכולם'
  about_you:string = 'ספר לכולם על עצמך בשני משפטים'
  instagram_link: string;
  facebook_link: string;
  linkedin_link: string;
  twitter_link: string;
  messageTo: string = '';
  messagesBtweenUsers: MessagesModel[] = []

  image: any;
  userImgProfile
  public imageProfilePath;
  imgProfileURL: any;
  public message: string;

  imgAddImgURL: string | ArrayBuffer = '';
  addImagePath: any;
  time = Date.now().toString()

  constructor(
    private privateAreaService: PrivateAreaService,
    private fb: FormBuilder,
    private svcClinets: ClinetsService,
    private chatMessagesService: ChatMessagesService,
  ) {

    this.userId = this.privateAreaService.getUserId();
    // this.userImgProfile = 'https://www.w3schools.com/w3images/avatar2.png'

    if(this.userId!=null){

      try {
        this.userImgProfile = `https://picpicture.herokuapp.com/private-area/getFile/${this.userId}`
      } catch (error) {
        
      }
    }

   }

  ngOnInit(): void {
 
    

    if(!this.userData && !localStorage.getItem('userData')){
      this.userData =  this.privateAreaService.user;
      this.svcClinets.userProfileImg$.next(this.userData.imgProfile)
    
    }
    else if(localStorage.getItem('userData')){
      this.userData = JSON.parse(
        localStorage.getItem('userData') || '[]');
        this.svcClinets.userProfileImg$.next(this.userData.imgProfile);
        

        this.profession = (this.userData.profession == null) ? this.profession : this.userData.profession;
        this.about_you = (this.userData.about_you == null) ? this.about_you : this.userData.about_you;
        this.instagram_link = (this.userData.instagram_link == null) ? this.instagram_link : this.userData.instagram_link;
        this.facebook_link = (this.userData.facebook_link == null) ? this.facebook_link : this.userData.facebook_link;
        this.linkedin_link = (this.userData.linkedin_link == null) ? this.linkedin_link : this.userData.linkedin_link;
        this.twitter_link = (this.userData.twitter_link == null) ? this.twitter_link : this.userData.twitter_link;

    }


    this.privateAreaService.userData$.subscribe( (data:UserModel) => {
        this.privateAreaService.user = data
        console.log('gggg', data);
        this.userData = data;
        
    })

    this.cardProfileForm = this.fb.group({
      imgProfile: ['', [Validators.required]],
      profession: ['', [Validators.required]],
      about_you: ['', [Validators.required]],
      twitter_link: ['', [Validators.required]],
      linkedin_link: ['', [Validators.required]],
      facebook_link: ['', [Validators.required]],
      instagram_link: ['', [Validators.required]],
    });

  }

  selectManageImgOption() {
    this.privateAreaService.getAllImgByUserId().subscribe((data: imgModel[]) => {
      console.log('data per userrrr:', data);
      data.map( img => img.imgUrl + `?d=${Date.now()}`)
      this.imgasListFromServer = data;
    });

    this.chatMessagesService.getAllUsers().subscribe((data:UserModel[]) => {
      data.map( img => {img.imgProfile = img.imgProfile + '?d='+Date.now().toString()})
      console.log('allll userssss:::', data);
      this.chatMessagesService.allUsers$.next(data);
    });
    // data.map( img => {img.imgProfile = img.imgProfile + '?d='+Date.now().toString()})

  }

  ManageImgOption() {
    this.alertBox = true;
    this.addMode = false;
    this.selectManageImgOption();
  }

  onCloseAddAlertBox() {
    this.addImgAlertBox = false;
    this.alertBox = false;
    this.addMode = false;
  }

  onCloseDeleteAlertBox() {
    this.deleteMode = false;
  }

  onCloseEditAlertBox() {
    this.editMode = false;
  }

  setImgProfile() {
    this.setProfileMode = true;
    this.setImgProfileImgMode = true;
  }

  
  setImgProfileToServer(){
    this.privateAreaService.setCardProfile
    (this.cardProfileForm.value.imgProfile, this.userId,'imgProfile' ).subscribe ((data:UserModel) => {
      localStorage.setItem('userData',JSON.stringify(data[0]));
      this.privateAreaService.userData$.next(data[0])
      // this.privateAreaService.user = data
      // this.userAllData = data
      this.svcClinets.userProfileImg$.next(data[0].imgProfile)
    })
  }


  setProfileProfshanl() {
    this.setProfileMode = true;
    this.setProfileProfshanlMode = true;
  }

  setProfileProfshanlToServer(){
    this.privateAreaService.setCardProfile(
      this.cardProfileForm.value.profession, this.userId, 'profession').subscribe( (data:UserModel) => {
        console.log('carf profession change data ', data);
        localStorage.setItem('userData',JSON.stringify(data[0]));
        this.profession = data[0].profession;
    })    
  }
  
  setAboutYouProfile(){
    this.setProfileMode = true;
    this.setAboutYouProfileMode = true;

  }

  setAboutYouProfileToServer(){
    this.privateAreaService.setCardProfile(
      this.cardProfileForm.value.about_you, this.userId, 'about_you').subscribe( (data:UserModel) => {
        console.log('carf profession change data ', data);
        localStorage.setItem('userData',JSON.stringify(data[0]));
        this.about_you = data[0].about_you;
    })    
  }


  setInstagramProfile() {
    this.setProfileMode = true;
    this.setInstagramProfileMode = true;
  }

  setInstegramLinkToServer(){
    this.privateAreaService.setCardProfile(
      this.cardProfileForm.value.instagram_link, this.userId, 'instagram_link').subscribe( (data:UserModel) => {
        console.log('carf profession change data ', data);
        localStorage.setItem('userData',JSON.stringify(data[0]));
        this.instagram_link = data[0].instagram_link;
    })    
  }

  setFacebookProfile() {
    this.setProfileMode = true;
    this.setFacebookProfileMode = true;
  }

  setFacebookLinkToServer(){
    
    this.privateAreaService.setCardProfile(
      this.cardProfileForm.value.facebook_link, this.userId, 'facebook_link').subscribe( (data:UserModel) => {
        console.log('carf profession change data ', data);
        localStorage.setItem('userData',JSON.stringify(data[0]));
        this.facebook_link = data[0].facebook_link;
    })    
  }

  setLinkedinProfile() {
    this.setProfileMode = true;
    this.setLinkedinProfileMode = true;
  }

  setLinkedinLinkToServer(){
    
    this.privateAreaService.setCardProfile(
      this.cardProfileForm.value.linkedin_link, this.userId, 'linkedin_link').subscribe( (data:UserModel) => {
        if(data){
          localStorage.setItem('userData',JSON.stringify(data[0]));
          this.linkedin_link = data[0].linkedin_link;
          this.cardProfileForm.reset()
          setTimeout( ()=> {
            this.setLinkedinProfileMode = false;
          },500)
        }
    })    
  }

  setTwitterProfile() {
    this.setProfileMode = true;
    this.setTwitterProfileMode = true;
  }

  setTwitterLinkToServer(){
    
    this.privateAreaService.setCardProfile(
      this.cardProfileForm.value.twitter_link, this.userId, 'twitter_link').subscribe( (data:UserModel) => {
        console.log(data[0].twitter_link);
        
        if(data[0].twitter_link){
          localStorage.setItem('userData',JSON.stringify(data[0]));
          this.twitter_link = data[0].twitter_link;
          this.cardProfileForm.reset()
          setTimeout( ()=> {
            this.setTwitterProfileMode = false;
          },500)
        }
    })    
  }

  onCloseSetProfile(){
    if(this.setImgProfileImgMode)this.setImgProfileImgMode = false;
    if(this.setProfileProfshanlMode)this.setProfileProfshanlMode = false;
    if(this.setAboutYouProfileMode)this.setAboutYouProfileMode = false;
    if(this.setInstagramProfileMode)this.setInstagramProfileMode = false;
    if(this.setFacebookProfileMode)this.setFacebookProfileMode = false;
    if(this.setLinkedinProfileMode)this.setLinkedinProfileMode = false;
    if(this.setTwitterProfileMode)this.setTwitterProfileMode = false;
  
  }



  setFileImgProfileToServer(){
    setTimeout( () => {
      this.userImgProfile =  `https://picpicture.herokuapp.com/private-area/getFile/${this.userId}?d=${Date.now()}`
      console.log('userImgProfiletttttttt', this.userImgProfile);
    },250)
      this.setProfileMode = false;

    this.privateAreaService.sendProfileImgFile(this.image, this.userId.toString(), 'imgProfile').subscribe( (data:UserModel)=>{
      console.log('data from server:::::::', data);
      localStorage.setItem('userData',JSON.stringify(data[0]));
      this.privateAreaService.userData$.next(data[0])
      this.svcClinets.userProfileImg$.next(`https://picpicture.herokuapp.com/private-area/getFile/${this.userId}?d=${Date.now()}`)

      
      
    })
  }
  previewImgProfile(e) {

    if (e.files.length === 0)
      return;
    let mimeType = e.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    let image = e.files[0] ;
    let fileReader = new FileReader();

      
      this.imageProfilePath = e.files;
      fileReader.onload = (e) => { 
        this.image = image;
        this.imgProfileURL = fileReader.result; 
      }
     
      fileReader.readAsDataURL(image);
      let formData = new FormData()
      formData.append('image', image);
  }

}
