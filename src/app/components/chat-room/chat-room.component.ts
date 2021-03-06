import { Component, HostListener, OnInit } from '@angular/core';
import { imgModel } from '../management/management.component';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
  NgForm,
} from '@angular/forms';
import { PrivateAreaService, UserModel } from '../../servises/private-area.service';
import * as io from 'socket.io-client';
import { MessagesModel } from '../private-area/messages-model'
import { ClinetsService } from 'src/app/servises/clinets.service';
import { ChatMessagesService } from 'src/app/servises/chat-messages.service';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  imgasListFromServer: imgModel[];
  alertBox: boolean = false;
  editMode: boolean = false;
  deleteMode: boolean = false;
  addMode: boolean = false;
  massegsesMode: boolean = false;
  massage: string = '';
  imgSelected: imgModel;
  imgUrl: any;
  deleteOrEditBtnName: string = '';
  idOfImgToEdit: number;
  allUsers
  editImgForm: FormGroup;
  chatMessageForm: FormGroup;
  cardProfileForm: FormGroup;


  categorySelected: string = '';
  subId: number;
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
  imgUrlProfile: string = ""
  userId: number
  userData: UserModel
  profession: string = 'פרסם את המקצוע שלך לכולם'
  about_you: string = 'ספר לכולם על עצמך בשני משפטים'
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
  reciverImgProfile: string = 'https://picpicture.herokuapp.com/private-area/getFile/default-avatar?d=1608217331505';
  closeUsersScreen: boolean = false;
  innerWidth: number;
  isMobile: boolean = false;
  lastMassageTime: Date;



  constructor(
    private privateAreaService: PrivateAreaService,
    private fb: FormBuilder,
    public chatMessagesService: ChatMessagesService,

  ) {
    this.userData = this.getDecodedAccessToken(localStorage.getItem('accessToken'));
    this.userId = this.userData.id
    this.userImgProfile = this.userData.imgProfile
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    

    console.log('   this.innerWidth: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', this.innerWidth);
    console.log('is MOBILE??????????????????????????????????????????????????????????????', this.isMobile);

    if (this.innerWidth < 767) {
      this.isMobile = true;
      console.log('is MOBILE??????????????????????????????????????????????????????????????', this.isMobile);
    }
    else{
      this.isMobile= false;
    }

    this.chatMessagesService.getAllUsers()
      .subscribe((data: UserModel[]) => {
        this.allUsers = data;
        data.map(img => { img.imgProfile = img.imgProfile + '?d=' + Date.now().toString() })
        this.chatMessagesService.allUsers$.next(data)
      })

    // this.chatMessagesService.allUsers$.subscribe( data => {
    //   this.allUsers = data;
    // })

    this.chatMessagesService.massegsesMode$.subscribe((data: boolean) => {
      this.massegsesMode = data;
    })

    this.listen();

    this.chatMessageForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  closeChatRoom(){
    console.log('asher kugel!!!!!');
    
    this.massegsesMode = false;
    this.chatMessagesService.massegsesMode$.next(false);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth < 767){
      this.isMobile = true;
    }
    else{
      this.isMobile = false;
    }
    console.log('this.innerWidth::::::!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1',this.innerWidth);
    console.log('this.is MOBILE::::::!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1',this.isMobile);
    
  }

  massagesBtweenUsersOption() {
    this.chatMessagesService.massegsesMode$.next(true);

    this.chatMessagesService.getAllUsers().subscribe((data: UserModel[]) => {
      data.map(img => { img.imgProfile = img.imgProfile + '?d=' + Date.now().toString() })

      console.log('allll userssss:::', data);

      this.chatMessagesService.allUsers$.next(data);
    });

  }

  onClosemassagesBox() {
    this.chatMessagesService.massegsesMode$.next(false);
    this.massegsesMode = false;
    this.reciderUserId = undefined;
    this.messageTo = ''
  }

  listen() {
    this.socket = io('https://picpicture.herokuapp.com', {});

    this.socket.on('msgToClinet', (messageData: MessagesModel) => {
      console.log('testtttttttttttttttttttttt (-:::::::', messageData.message_text);

      this.messageData.push(messageData);

      

      this.lastMassageTime = messageData.time
    });
  }

  sendMessage() {
    console.log('asher hanuka');
    var result = '';
    var d = new Date();
    result += ' ' + d.getHours() + ':' + d.getMinutes();
    let msgToServer = {
      sender_id: this.userId,
      resiver_id: this.reciderUserId,
      message_text: this.chatMessageForm.value.message,
      time: result,
    };
    this.chatMessageForm.value.message;
    this.socket.emit('msgToServer', msgToServer);
    this.chatMessagesService.sendMessageToServer(msgToServer).subscribe((data: MessagesModel) => {
      console.log('msg data: after emited to server', data);
      // this.messageData.push(data);
    })
    this.chatMessageForm.reset();
  }

 

  getMessage(sender_id, resiver_id) {
    this.closeUsersScreen = true;

    // this.messageData = this.messagesBtweenUsers;

    this.chatMessagesService.getMessages(sender_id, resiver_id)
      .subscribe((data: MessagesModel[]) => {
        console.log('all msgggg:', data);

        this.messageData = data

      })

    console.log('arr: messages Btween Users::::', this.messagesBtweenUsers);
  }

  backInChatRoom() {
    this.closeUsersScreen = !this.closeUsersScreen;
  }


  sendMsgToUser(user: UserModel) {
    this.reciderUserId = user.id;


    this.messageTo = `Message ${user.username}`
    this.reciverImgProfile = user.imgProfile

    this.getMessage(this.userData.id, user.id)
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }


}
