import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  listCardItems = [
    {title: "dog", subTitle: "koko", imgUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", des: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for ."},
    {title: "cat", subTitle: "mitsi", imgUrl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", des: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."},
    {title: "monkey", subTitle: "tiki", imgUrl: "https://static5.depositphotos.com/1000943/455/i/950/depositphotos_4550227-stock-photo-young-monkey.jpg", des: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."},
    {title: "tyger", subTitle: "yosso", imgUrl: "http://s2.favim.com/orig/160109/animal-animals-baby-cute-Favim.com-3860042.jpg", des: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."},
    {title: "dog", subTitle: "koko", imgUrl: "http://s1.favim.com/orig/24/bird-djur-macaw-parrot-Favim.com-218991.jpg", des: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."},
    
  ]
  arr = [1,2,3,4,5]

  constructor() { }

  ngOnInit(): void {
  }

}
