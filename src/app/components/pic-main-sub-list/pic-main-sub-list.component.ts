import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImgSubListService } from '../../servises/img-sub-list.service';
import { BuyingProcessService } from '../../servises/buying-process.service';
import { ImgModel } from 'src/app/models/img-model';



@Component({
  selector: 'app-pic-main-sub-list',
  templateUrl: './pic-main-sub-list.component.html',
  styleUrls: ['./pic-main-sub-list.component.css']
})
export class PicMainSubListComponent implements OnInit {
  public imgIdListSubject;
  public imgUserChoseToBuy: ImgModel
  public listOfItemsInBag:any [] = []

  

  imgListBySubjects = [
    {subId: 0, listOfImgUrlBysub:
      [
        {imgId: 0, imgDes: "some nice img 0", price: "120", imgUrl:"https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view1.jpg"},
        {imgId: 1, imgDes: "some nice img 1", price: "100", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view2.jpg"},
        {imgId: 2, imgDes: "some nice img 2", price: "300", imgUrl:"https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view3.jpg"},
        {imgId: 3, imgDes: "some nice img 3", price: "134", imgUrl:"https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view4.jpg"},
        {imgId: 4, imgDes: "some nice img 4", price: "123.5", imgUrl:"https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view5.jpg"},
        {imgId: 5, imgDes: "some nice img 5", price: "654", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view6.jpg"},
        {imgId: 6, imgDes: "some nice img 6", price: "130", imgUrl:"https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view7.jpg"},
        {imgId: 7, imgDes: "some nice img 7", price: "220", imgUrl:"https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view8.jpg"},
        {imgId: 8, imgDes: "some nice img 8", price: "1000", imgUrl:"https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view9.jpg"},
        {imgId: 9, imgDes: "some nice img 9", price: "1544", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view2.jpg"},
        {imgId: 10, imgDes: "some nice img 10", price: "143", imgUrl:"https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view3.jpg"},
        {imgId: 11, imgDes: "some nice img 11", price: "123", imgUrl:"https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view4.jpg"},

        
      ]
    },
      {subId:1,listOfImgUrlBysub:
        [
          {imgId: 0, imgDes: "some nice img 0", price: "150", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGohAh3dNhzAIKNgsMmEPRW4Wbq1g7zjsrTw&usqp=CAU"},
          {imgId: 1, imgDes: "some nice img 1", price: "160", imgUrl:"data:image/jpeg;base64,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"},
          {imgId: 2, imgDes: "some nice img 2", price: "180", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGohAh3dNhzAIKNgsMmEPRW4Wbq1g7zjsrTw&usqp=CAU"},
          {imgId: 3, imgDes: "some nice img 3", price: "220", imgUrl:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUWFhUXFxUVFxcXFxUVFxgXFxUVFRcYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rN//AABEIAQoAvgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgIDBAEAB//EADQQAAEDAgUCAwYFBQEAAAAAAAEAAhEDIQQFMUFREmEicYETkaGx0fAGFBUywQdCUuHxYv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACERAQEBAQACAwACAwAAAAAAAAABAhEDMRIhQQQTUWFx/9oADAMBAAIRAxEAPwCnMMyI3Qp+bd1jzStcoJUrlMGT9W7rn6qeUsDEFc9uUjNBzYr36seUr/mFW7FFHBbw1nN+64c5KU/zC9+YT4nps/WDyufrB5SqMQvfmCmRr/WjypDPClL2677cpcHTi3PFop5pO6RfzBWjC4wgo+MF1f8AJyfm0G5VgzSdCkvH4k9fYgQqaeMINilcRWfJT9+pnlQOZpXw2P6h3Vntlhyy8rolmp2DFXNb6qh+bd0v161ys7663y5qaqGamRdFqeZmNUgUK5kI1SqmFHk9tPGcsNmaM4THSEhYOvdMuXvss23PolZoboFVRzNNSgVVdDmQlcXF4oDjiolecV5OJtcXV5eTJ6F4Lq6AkEQuroC6QmOoKynqoEKdNAX1W9TZ/wAfkspC10XwfmuYnDRcaITKooVIIKL0nSJQUhb8vqXhRudnWvj1y/8AVWIPiKzvK0Yn9xWd6efSb7Twx8QRykbIFhtQi1EmFn5J9tfHeCODNwmjLTZKuDOiaMtNlDb8Kea6oDVR7NdSgVVbuZUVFdhcKAgpLkLqaHoXoXl2Ew9C6AvKSCehdhdhSAQXUOldAhSAUXlAcBRDCVR+06feiHK1hiPj/r0TFbMXl+430WSiwtcEVwmIkQVPEYcFHOlKD1/3FZ3rXiBBKxvURonh9UUpmyF4UeIIlTUb9tMCGCN00ZYbJWwRTPlpsoa/hYzQXQGqjubOuUCqOH3/ACtmHVK49Taz1UXsPCZWoLq4uhBOgLoXFIJk6F0NK61TQlEAqcLwUkyRIVRC0KJQOqoXWqUL0IPq6g+ETpVZCEsK10SgleYsuO4Q5yJZiZj1Q1yn9XPSzDaohSQ/Dm6INCz37aYbsIbhM2WGyVsGbpoyw2UtOlfNtUBrI/muqA1lswVhyvp1uVnXkFxvF+64aI4WRjyNFpp1uR6pp48cMFF2HIWpkHRWNCB1ibTPCl0LU1im6gOEyZOheDVp/Kjv6FcNA8lAU+zKgaRV/s3c/BcNNxQGctXIWn8u5Vmi4f2lARYFtorK0Ec+4rVQvp8CgOZjT8INkIcjOZHwBBnpX2rPpZh9VuBWChqtzAs9+2ufTbg9QmfK9Er4TVNGV6KVlrNRdAaqYM1FygNZq1YqQFoo4aVczAgCXOg8KbaBA8JkKLv/AA1njs9xxuHHorRRGqspskLvSs7Wkyo9nvorBI1uPirwxTDEv7LDvhzr2zhwO8djZWgleqU+VX0EaE+WoWufLP1hr+PZ6aKdRSMFZvaHcT5fRT9o3mPOy1mpWGsWe4tNIL3Qo31XPappTaw6wrQDa9lnbUVjXW80BcalrgLzqNM7X5VYdK6DEJhDF4QlkAzxNvj9UDxOGew+JpHyTIHKQvslxUvCvh9VuBsiOIyxjrjwntp7lkq4NzdRbkaLLea1xqVZhdQmjLNErYPVNOWCyhoXs01QekPG2eUYzTUoI4wQeCtLPpGbyijKPU71V5ou2CtwsXPIBXn4qDHx4XL29d9kkdZhp19VKnhrLbgaRMz74stxwoDShHeAj2AKvoRZ2EVFXDEKPk1kDuhVFq3PpKh1MolFih1JRdSHmtjaE/d1IYU8ytJUXPQ00Y0keRUQXdj5j+QirsIQqnUO0FXN1nrwS/jAXRq33FTZVbzHmIV5wp4VZp30VzysdfxlgAOhBXelQFAH+0e66uo4Id/QlX/bEX+PpBkrSwff0Q7MgabvC4++fNYW5rUG/wAFc1KxuLDLR+SuYLduOUs084qcj3K0ZtV5b7kXUT8aOfpgJlvhPGx+iJ4CmW2IhLmGzaqdSPcmTLMY8i5B9FnZGubr9LWa6lAqxRzNdUBrKgYsqh1Jodvae40WpmELdRfb73WrJ8M32bQdHAH1GkLZjMMXtHTqFx28tehjmsxWypFgLxbiVoMkRvZVYbDugA/u+9UU/LARPaTyUi4rpYdcfhkQoMn4q5tOdVnW09F3FYO0whL2mYCZswpuExol8seTLWT52VRLlOmdFoa2DootbW1hgEdyZG10IOa1jHgbBMT0GJ/xmdVczb6TryZx9UfpvYV2phWnRCaOI6rGAfOyswmYeMtFwN0uVcsEDhwBPKqdggbrUHyQCpPxDLxJjhLp8DG4NxNgtRwMCSrTmUaBo8yFx9Vzhc7KpUa/0Vs9rAuI4+aBOW7MNSeVhK6sz6edr27SWhrlnYrmp0Ruweqa8qNkqYMJryo2UKAc11KCuYjWa6oT7PqMfYWjOnzIqQfhGuFy0H4IngS0iSUN/AVUQ+nP/oTBsbED3D3rW7DmlUc0C0kidI4C5vJnv26fDvn1W11JvVa/yCtxDdBvfXhV0HgwZCniXiRwP4USN7rvpHB91vY5DBAk69vNTouO8rPUaYv0LmiHW5QnFYEB0gonSqRrqr34X2g0UtS86gdbeY38whOPwdJvi6b9pHwTK/Iqg0MDuuD8Ogwaji6+gsIVS8Tc99kinlpqE9IsieCyPo2TpSwDGjpEBV4nCdk7r8EzO9LeJwsbJbl/UQDF/wCd19GxeCBaPJJ+Py0hzi3lOVNn2CVMncTPTJJnqnbiIRAUCxtS+3pJ2j1WmniiB0lp+C0V6YFB7iP3QI9Qr+Vt5WOsTMvCbmFMWJb6jRCqwElMGJYRLZkGb7g+SXauq6cuLTzFcwKhi0NRoRtwaasq0SpgzcJryr9qlQHmepWXBUjBtuJO8LVmWqllTL3tHiPno0K9X6RPZg/DrTScCSBP9trDSeUzYps+IAW98JcoVCCJsT5bbcymHDPHRfX7hZVURdTi5VQbMiLRutXteYPkVjxRMQD/AMWdb5qnqmzRef8Av32Wmi0j4329FVh6W+ljB4HKkXXDbwbDz5CmxtiuVKx2lNGUv8I4hABTaLb2RjDYprW6rOt8t9fESl78QZz7NsNu6LD6qzF5gXWYCSdAFiw2TOf4ngkmfRKRd1BHLctJaHucS437DyC24dhmDssbM89ieioxwi0gSCPvZEsDmNKqOqm6Y1GhHYg3SvVdjVmGHAYI4SVWcPaOadv5Tti8SC2Oy+f5+4MrBwJuPF5TaVTNYaAJmPesWfu8IaIgQfpoiNFwImUJzCp1OJiYMegF/hK08c+2P8i8haxeK6SDE3EibHyPKEYylJLm/t+p0RbOWtBkC1yLjU8/RAjVNxyI9F1ZedUWq0Klqtaqpt2DOia8p0SnhNk15VopsOA+YDxe9Tyl0GY33+XwUMyN1HLXeMAckmdCCjSYZMM0l3YCCbeZ/hG8JcfX5IUB4QRqePu63YEBly4lxjWIn0WdU3VGRdZsRfUnY97LTUZIkXCi3D28X/OLqFysoMQdhYTeT/C9RkugGSL3WurSkWGlvVV0aJ6ukwLR6C8FTWuKsw7JGt/u8rbQw587Wj7svYSmAYi2htMyjmBwvQQbAcRJJ2+4UyL35ORnwuUN6wDci5vdGcNggAY5ufRWUqYB6nWd2272Wn2oAAG4JvrF/onYx/spZzzJhVbEcn/SRTg6uHe17SY+Otx3X1CtWDaY0JM69/spQx9QF0RoDHv09yfFTyaYTmzzo0qunlzqh6oudZ3WmnhYBMWgn3EafNF8vAGpkfI2S5xWvJaF1Mve0RF9tvRYKmEA/c0mY8Q/kDunmtRBADgHDYn71QbMcJ03AjnaO99leWOtWvkmdUOl9SCCJiJk8g+iX3ap3/FmCDCX2JMhw0AB+f8AtJLwt8sq41TCg1TCoN2E1TXlWiVMJqmvKjZKmD5qbrHgKwFRs8rbmYug3VB9U76S+hYd8ttzA7QtnXMaCD80CyPGyI/ttfgn57o5g6ch3eSD35WJ9EqOg7we1wtxw4c31+SzUCCxpNrAkD0kIkNLd1J9ZHMhsgb/ACXKdGJcR8fjdWubbznm0rtPWLCwN94KmxpnS6hIGmm978rVSxGsEA+ck/RZmD/K9vVD8SyA4R69ufPVI/Y4MSBJe7TgzI2Fla3NOrQGIF99Y/lLOCYTOsEiOw5PxRfDshrmgXg3/hS0uZzrJnWaPEBrRAk+Z2QKpTe99w4E3naY2RmrS6n83sed4+Cvw3SNHW/xKZy8BB7UCLQTEg6G0LVhMW5pIN41kfEeYRp2GYRFh6/wsz8EAREEAd7fUJs7pqoY4EC2u2un2EKz/H9LHdOgEu150haWtuQI8kDzoGXGSDcEHTTfkQrzGdJP4hxftAROlwNiL3HB7fVK5N+yMZqzpdLTY6g6ifPUcFB3C62yiuNUwVAKQVBuwZumvKtEq4TZNWVaJUwnNdUCqOgo5m2qA1VSRjIcYGHxGxI9DOvx+KesG+dND8fvlfNsvq9J8yBCfssrdTDeIhoneFloGKkZcfIAevCJ0iIAne3yQfLzLtf2i5/9aQEQDr9NxFwO+s+qgNIZMcXGmi8+mCb+XAA81bhW7+ULU+COnQ/KVKuqmNk2A4uPkq6+GBsNfuVY2wJi8x5Rqrw7xbfWdD80jlCKbQPDpeO9pIstlJ4YDO8wV7FYch0i1tRz67qiq4kdJguMwYtMaHslxfzr2Dpglu0GSNfsTuqn0CHwOSD5G7VfhDMgWIPmINoK1jDjqnYiD2jRHD+bO7DGNd/9rPQpnqiNL9oR6nSBEe5Z6NGBfg7d7hNN0wPp2neANN+6AfiWlHikgOAi2jxa/wAE01WbbA8HT/qE/iGiTTPTB3HULRweyvKLXyTOqwcSwASDII31kFACjOe0AyoOkdNpImYJJiDxEIRUF1tkkWlTUAphMNuDTXlWiVMJqmrKtEAKzVtygFYJgzTVAa4umlPAOhw5Trg6oZ0tJ1IgiPvhIbNU5fh5/WxpdbpgB3n8yo1Dh5y14AnbSd5H8q2ibkzt/sfyh9bEtptDdzaNTf68q7C4kxpE76z/AMWRDmDqT4YtM+YWinIkHUzHksGDxEbbxfntKvr1fED7/RSbSxkgxPp81eLuvoPsFV03y0RaQvMmL6kf8SUsrt8Dt5shpIkHQgxMXtGnKJOdYj70Qiq4wZ16o57W+qIGljR1WEXkkb9/PstVAnpmN48/NYabjIPf1hb8LHu/lFNvA30gfH6qNF4mCovEix8voutgNsL8pBB9PfYWPZZsbhQ4Fs+Wi3sbIvflYcVQgGCLbfRXE18J/GGFdTxNRpMifCeW7e7T0QNroTv/AFFBc8OH7ZjjxX1++UjFb59E81dC40qQTNtwmoTXlWiVMGmvKtEAJzQ3QSoUbzUXKB1U0qiEw5BmHTDdpj4/ygAur8DU6XRzb74S1A+kNrNcQXW4MyerSFrdimskdUkbcReZ2SvTzNnsSbtI6bxETrBMz80CxucPc4uDoBsBAmN7/eqy+PQ+m/nG2PVIiQJ91vOfct1DEktgxNjGvyXyvJ84hw6iYGg4T3+Hsy6y4x4QTrYRAgJXPDhpwzHBpJIn/ciPerxirTqd43Q+pibC8LtQgssYG+na6zMSpVbxvEz/AAsrrRY+Ilp+cqujWncQDpEEja/nK7Xf1DqBG8dxsYQbmFBhwJ0PHw+XvWqi8gjp5v5d+6EsxRkf+jN+0AhbxUuCAgxdpEE3EXXJPvH2fmsrcQLCF0VidDN9EiEcJv8ANTxdAGdIjXhV4epY/fvV2JqHoga+Vj9hOUV8j/qVhiSOmOg/3SLOH9p+a+auN5X1H+qNVgptEw4xDBpEXLo+RXy1xXRj0lwKQUQpBUbbgxomzKtEp4Q6Jryr9qAF5qLoFVTPmlAygNWj2TSwgKWqu9gV0USgKXVjF/v7/lVvPr5rQ7DqPsEjV0KhBTBleddHlw3uB6CED9gV1tIhKzoPuX502o5xc4hsNG9ot0gjeSiVXM2gxraNdJ0+PEr57gmkOk6GO1gZ12R+lVFEtENJNy65DdzE79tFncg64bE2MnyNztqJV9OqbtJAIHp28klVs3c4wCAAdQTJAuAO58kRp5y6oJEBoMOmXGIkQNZJt7uVPxpi1SsA4RBgzJmw5/6r3ZoQ6xBEDgxGo+aTc/zRwJaDbUt0DjHvAv7wsFDM3eE+KZJN7XPxsPij4n19OqZmNRrzoqjmuscx3Om6QMRnj3OlsjQczxbSFqdmHUQ1oMuEnm10fAdfTsFiPBe/+9Ar/wA65olwtJ+A25KU8gxpnpc+DpBFwIsZW/PcxptYSXNJ1JDhB2DW9zyEuFSN/UysH1GOnmG9v8ifP5JCIumPPsd7V1hoI1kRM2CCGit8+iZwpAK4UCpigUzWYPVNmU6JcwdC6acrpWQG/H5fJ0QerlR4T3imjhD3tHCIXCecq7Lxyo8JtLRwudI4QfCn+ldlF2U9k3dI4XC0cIHCj+knhc/SeybukcL3SOEAqNys6wp08E4dwdjf1TR0jhS6BewQCl+nHhXUMK5ugvzCZOkcLvSI0SBYxGXF1yNVU3Kzwm3pEaLnSOEQcK7cr7LXgsHDw50yI03iImUea0cLrWjhAZMawtdIcSY4tfdBa+Fe8knf3enCZ3hVdI4SkHCmcqPCj+knhN5aOFwtHCoFIZSeFIZUeE1ho4XekcIMu4bKzwmHL8BA0Wmi0cIvghZAf//Z"}
        ]
      }
]

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    public svc: ImgSubListService,
    public buyingSvc: BuyingProcessService
    ) {
    this.svc.imgListOrderBySobjects = this.imgListBySubjects;

   }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.imgIdListSubject = id;
  }

  onImgSelected(img){
    this.router.navigate(['/img-details' ,img.imgId])
    this.svc.imgurlSelected =  img.imgUrl;
    this.svc.imgDescription = img.imgDes;
  }
  omImgSelectedToBuy(img){
    this.buyingSvc.itemAmount +=1;

    this.buyingSvc.itemImgIdToBeDisplayInBag = img.imgId;
    this.buyingSvc.itemImgDesToBeDisplayInBag = img.imgDes;
    this.buyingSvc.itemImgPriceToBeDisplayInBag = img.price;
    this.buyingSvc.itemImgUrlToBeDisplayInBag = img.imgUrl;

    this.listOfItemsInBag.push(
      {imgId: this.buyingSvc.itemImgIdToBeDisplayInBag},
      {imgDes: this.buyingSvc.itemImgDesToBeDisplayInBag},
      {price: this.buyingSvc.itemImgPriceToBeDisplayInBag},
      {imgUrl: this.buyingSvc.itemImgUrlToBeDisplayInBag})
      this.buyingSvc.listOfItemToBeDisplay = this.listOfItemsInBag
      console.log(this.listOfItemsInBag);
    

    // this.buyingSvc.itemImgIdToBeDisplayInBag = img.imgId
    // this.buyingSvc.itemImgDecToBeDisplayInBag = img.imgDes;
    // this.buyingSvc.itemImgPriceToBeDisplayInBag = img.price;
    // this.buyingSvc.itemImgUrlToBeDisplayInBag = img.imgUrl;
    // this.listOfItemInBag.push(
    //   {imgId:  this.buyingSvc.itemImgIdToBeDisplayInBag,
    //     imgDec:  this.buyingSvc.itemImgDecToBeDisplayInBag,
    //     price:  this.buyingSvc.itemImgPriceToBeDisplayInBag,
    //     imgUrl:  this.buyingSvc.itemImgUrlToBeDisplayInBag
    //   });
    //   console.log(this.buyingSvc.itemImgDecToBeDisplayInBag)   


    
    

    

  }

}
