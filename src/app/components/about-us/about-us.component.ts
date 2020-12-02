import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  imgArr = [
'https://www.photo-art.co.il/wp-content/uploads/2017/09/Springtime-Dishon-2.jpg',
'https://www.photo-art.co.il/wp-content/uploads/2015/08/IMG_1036-1-600x750.jpg',
'https://www.photo-art.co.il/wp-content/uploads/2015/04/BY1A10011-600x900.jpg',
'https://www.photo-art.co.il/wp-content/uploads/2015/08/IMG_1036-1-600x750.jpg',
'https://www.photo-art.co.il/wp-content/uploads/2017/09/Springtime-Dishon-2.jpg',
'https://www.photo-art.co.il/wp-content/uploads/2015/09/ah_HAAS_4010_1200-600x900.jpg',
'https://www.photo-art.co.il/wp-content/uploads/2015/09/ah_HAAS_5103_1200-600x900.jpg'];
currentPos: number = 0
  img: string;

constructor() { }

ngOnInit(): void {

  this.imgArr.forEach(element => {
    this.img =  element
  });
  setInterval(this.setImg, 4000)


}



setImg = () => {
  if (++this.currentPos >= this.imgArr.length) this.currentPos = 0;
  let p = this.imgArr[this.currentPos];
  this.img =  p
};



}