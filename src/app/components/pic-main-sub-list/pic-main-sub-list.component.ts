import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImgSubListService } from '../../servises/img-sub-list.service';
import { BuyingProcessService } from '../../servises/buying-process.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';



@Component({
  selector: 'app-pic-main-sub-list',
  templateUrl: './pic-main-sub-list.component.html',
  styleUrls: ['./pic-main-sub-list.component.css']
})
export class PicMainSubListComponent implements OnInit {
  public imgIdListSubject: number;
  public listOfItemsInBag: any[] = []
  public imgListSubject: string =  ""
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';



  imgListBySubjects = [
    {
      imagesSubject: "תמונות נוף",
      subId: 0,
      listOfImgUrlBysub:
        [
          { imgId: 0, numOfItems: 1, photographer: "יוסי כהן", imgDes: "some nice img 0", price: "120", imgLongDes: "צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view1.jpg"},
          { imgId: 1, numOfItems: 1, photographer: "יוסי כהן", imgDes: "some nice img 1", price: "100", imgLongDes: "צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view2.jpg"},
          { imgId: 2, numOfItems: 1, photographer: "יוסי כהן", imgDes: "some nice img 2", price: "300", imgLongDes: "צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view3.jpg"},
          { imgId: 3, numOfItems: 1, photographer: "יוסי כהן", imgDes: "some nice img 3", price: "134", imgLongDes: "צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view4.jpg"},
          { imgId: 4, numOfItems: 1, photographer: "יוסי כהן", imgDes: "some nice img 4", price: "120", imgLongDes: "צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view5.jpg"},
          { imgId: 5, numOfItems: 1, photographer: "יוסי כהן", imgDes: "some nice img 5", price: "100", imgLongDes: "צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view6.jpg"},
          { imgId: 6, numOfItems: 1, photographer: "יוסי כהן", imgDes: "some nice img 6", price: "300", imgLongDes: "צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view7.jpg"},
          { imgId: 7, numOfItems: 1, photographer: "יוסי כהן", imgDes: "some nice img 7", price: "134", imgLongDes: "צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view8.jpg"},
          { imgId: 8, numOfItems: 1, photographer: "יוסי כהן", imgDes: "some nice img 8", price: "120", imgLongDes: "צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/viewImg/view9.jpg"},
         
        ]
    },
    {
      imagesSubject: "תמונות רבנים",
      subId: 1,
      listOfImgUrlBysub:
        [
          { imgId: 0, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 2", price: "180",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט",imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGohAh3dNhzAIKNgsMmEPRW4Wbq1g7zjsrTw&usqp=CAU" },
          { imgId: 1, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 3", price: "220",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט",imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/rabanim/rabanim2.jpg" },
          { imgId: 2, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 4", price: "220",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט",imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/rabanim/rabanim3.jpg" },

        ]
    },
    {
      imagesSubject: "תמונות אסטרקט",
      subId: 2,
      listOfImgUrlBysub:
        [
          { imgId: 0,numOfItems: 1,photographer:"יוסי כהן", imgDes: "some nice img 0", price: "150",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט",imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/absract/absract1.jpg" },
          { imgId: 1, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 1", price: "180",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט",imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/absract/absract1.jpg" },
          { imgId: 2, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 2", price: "220",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט",imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/absract/absract2.jpg" },
          { imgId: 3,numOfItems: 1, photographer:"יוסי כהן",imgDes: "some nice img 3", price: "150",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט",imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/absract/absract1.jpg" },
          { imgId: 4, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 4", price: "180",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט",imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/absract/absract1.jpg" },
          { imgId: 5, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 5", price: "220",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט",imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/absract/absract2.jpg" },

        ]
    },
    {
      imagesSubject: "תמונות טבע",
      subId: 3,
      listOfImgUrlBysub:
        [
          { imgId: 0,numOfItems: 1,photographer:"יוסי כהן", imgDes: "some nice img 0", price: "150",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/nature/nature1.jpg" },
          { imgId: 1,numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 1", price: "160", imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", mgUrl:  "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/nature/nature1.jpg" },
          { imgId: 2, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 2", price: "180",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/nature/nature1.jpg" },
          { imgId: 3, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 3", price: "220",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/nature/nature1.jpg" },
          { imgId: 4,numOfItems: 1, photographer:"יוסי כהן",imgDes: "some nice img 4", price: "150",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/nature/nature1.jpg" },
          { imgId: 5,numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 5", price: "160", imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", mgUrl:  "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/nature/nature1.jpg" },
          { imgId: 6, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 6", price: "180",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/nature/nature1.jpg" },
          { imgId: 7, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 7", price: "220",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/nature/nature1.jpg" },

        ]
    },
    {
      imagesSubject: "תמונות של ים",
      subId: 4,
      listOfImgUrlBysub:
        [
          { imgId: 0,numOfItems: 1,photographer:"יוסי כהן", imgDes: "some nice img 0", price: "150",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/sea/sea1.jpg" },
          { imgId: 1,numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 1", price: "160",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl:  "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/sea/sea2.jpg" },
          { imgId: 2, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 2", price: "180",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/sea/sea1.jpg" },
          { imgId: 3, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 3", price: "220",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/sea/sea2.jpg" },
          { imgId: 4,numOfItems: 1, photographer:"יוסי כהן",imgDes: "some nice img 4", price: "150",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/sea/sea1.jpg" },
          { imgId: 5,numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 5", price: "160",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl:  "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/sea/sea2.jpg" },
          { imgId: 6, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 6", price: "180",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/sea/sea1.jpg" },
          { imgId: 7, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 7", price: "220",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/sea/sea2.jpg" },

        ]
    },
    {
      imagesSubject: "תמונות אורבני",
      subId: 5,
      listOfImgUrlBysub:
        [
          { imgId: 0,numOfItems: 1,photographer:"יוסי כהן", imgDes: "some nice img 0", price: "150",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/lurking/lurking1.jpg" },
          { imgId: 1,numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 1", price: "160",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl:  "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/lurking/lurking2.jpg" },
          { imgId: 2, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 2", price: "180",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/lurking/lurking1.jpg" },
          { imgId: 3, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 3", price: "220",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/lurking/lurking2.jpg" },
          { imgId: 4,numOfItems: 1, photographer:"יוסי כהן",imgDes: "some nice img 4", price: "150",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/lurking/lurking1.jpg" },
          { imgId: 5,numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 5", price: "160",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl:  "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/lurking/lurking2.jpg" },
          { imgId: 6, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 6", price: "180",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/lurking/lurking1.jpg" },
          { imgId: 7, numOfItems: 1,photographer:"יוסי כהן",imgDes: "some nice img 7", price: "220",imgLongDes:"צבעי שלכת חמים ומלטפים – אדום עמוק, ורוד כתום, ורוד פוקסיה וצהוב לימוני על רקע דשא ירוק בהיר. תמונה מקסימה המשדרת אופטימיות וחום מתוך מגוון תמונות מיוחדות לסלון מסוגנן בעיצוב מודרני נקי. הדפסות איכותיות על מבחר חומרים באתר התמונות פוטו ארט", imgUrl: "https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/lurking/lurking2.jpg" },

        ]
    },
    
  ]
 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public svc: ImgSubListService,
    public buyingSvc: BuyingProcessService,
    private _snackBar: MatSnackBar
  ) {
    this.svc.imgListOrderBySobjects = this.imgListBySubjects;

  }

  ngOnInit(): void {
    console.log('id from list : ' + this.route.snapshot.paramMap.get('id'))

    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.imgIdListSubject = id;
  }

  onImgSelected(img) {
    this.router.navigate(['/img-details', img.imgId])
    this.svc.imgurlSelected = img.imgUrl;
    this.svc.imgDescription = img.imgDes;
    this.svc.imgPrice = img.price
    this.svc.photographer = img.photographer;
    this.svc.imgLongDes = img.imgLongDes;
  }
  omImgSelectedToBuy(img) {
    let id = this.buyingSvc.itemImgIdToBeDisplayInBag = img.imgId;
    let des = this.buyingSvc.itemImgDesToBeDisplayInBag = img.imgDes;
    let price = this.buyingSvc.itemImgPriceToBeDisplayInBag = img.price;
    let url = this.buyingSvc.itemImgUrlToBeDisplayInBag = img.imgUrl;
    let numOfItems = this.buyingSvc.numOfItems;
    this.buyingSvc.listOfItemToBeDisplay.push([{id: id,des: des,price: price, url: url, numOfItems: numOfItems}]);
 
    this.buyingSvc.itemAmount += 1;

   
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
