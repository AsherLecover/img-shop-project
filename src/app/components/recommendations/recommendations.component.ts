import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css'],
})
export class RecommendationsComponent implements OnInit {
  customersrRecommendsList = [
    {
      customerRecommendsName: 'יעל לוי',
      customerRecommendsImg: [
        'https://www.photo-art.co.il/wp-content/uploads/2019/12/d1-300x225.jpg',
        'https://www.photo-art.co.il/wp-content/uploads/2019/12/d2-300x225.jpg',
      ],
      customerRecommendsMassage: `מאוד עזר לי לשוחח איתך 
                            ולהתייעץ לפני הרכישה. אדיבות 
                            ומקצועיות. המשלוח היה מהיר וללא תקלות, התמונה הגיעה ארוזה היטב 
                            והמוצר המוגמר באיכות גבוהה ובדיוק כמו באתר, בלי הפתעות... 
                            אני נהנית להסתכל על התמונה, מאוד מוסיפה לחלל`,
    },
    {
      customerRecommendsName: 'יעל לוי',
      customerRecommendsImg: [
        'https://www.photo-art.co.il/wp-content/uploads/2020/07/123-2-300x222.jpg',
        'https://www.photo-art.co.il/wp-content/uploads/2020/07/123-1-300x333.jpg',
      ],
      customerRecommendsMassage: `מאוד עזר לי לשוחח איתך 
                            ולהתייעץ לפני הרכישה. אדיבות 
                            ומקצועיות. המשלוח היה מהיר וללא תקלות, התמונה הגיעה ארוזה היטב 
                            והמוצר המוגמר באיכות גבוהה ובדיוק כמו באתר, בלי הפתעות... 
                            אני נהנית להסתכל על התמונה, מאוד מוסיפה לחלל`,
    },
    {
      customerRecommendsName: 'יעל לוי',
      customerRecommendsImg: [
        'https://www.photo-art.co.il/wp-content/uploads/2017/12/IMG-20171212-WA0001-300x225.jpg'
        ,
      ],
      customerRecommendsMassage: `מאוד עזר לי לשוחח איתך 
                            ולהתייעץ לפני הרכישה. אדיבות 
                            ומקצועיות. המשלוח היה מהיר וללא תקלות, התמונה הגיעה ארוזה היטב 
                            והמוצר המוגמר באיכות גבוהה ובדיוק כמו באתר, בלי הפתעות... 
                            אני נהנית להסתכל על התמונה, מאוד מוסיפה לחלל`,
    },
    {
      customerRecommendsName: 'יעל לוי',
      customerRecommendsImg: [
        'https://www.photo-art.co.il/wp-content/uploads/2020/07/512-1-300x225.jpg',
        'https://www.photo-art.co.il/wp-content/uploads/2020/07/512-2-300x225.jpg',
      ],
      customerRecommendsMassage: `מאוד עזר לי לשוחח איתך 
                            ולהתייעץ לפני הרכישה. אדיבות 
                            ומקצועיות. המשלוח היה מהיר וללא תקלות, התמונה הגיעה ארוזה היטב 
                            והמוצר המוגמר באיכות גבוהה ובדיוק כמו באתר, בלי הפתעות... 
                            אני נהנית להסתכל על התמונה, מאוד מוסיפה לחלל`,
    },
    {
      customerRecommendsName: 'דני לוי',
      customerRecommendsImg: [
        'https://www.photo-art.co.il/wp-content/uploads/2017/09/IMG-20170907-WA0006-300x169.jpg'
      ],
      customerRecommendsMassage: `מאוד עזר לי לשוחח איתך 
                            ולהתייעץ לפני הרכישה. אדיבות 
                            ומקצועיות. המשלוח היה מהיר וללא תקלות, התמונה הגיעה ארוזה היטב 
                            והמוצר המוגמר באיכות גבוהה ובדיוק כמו באתר, בלי הפתעות... 
                            אני נהנית להסתכל על התמונה, מאוד מוסיפה לחלל`,
    },
    {
      customerRecommendsName: 'שוקי שפירא',
      customerRecommendsImg: [
        'https://www.photo-art.co.il/wp-content/uploads/2019/12/d1-300x225.jpg'
      ],
      customerRecommendsMassage: `מאוד עזר לי לשוחח איתך 
                            ולהתייעץ לפני הרכישה. אדיבות 
                            ומקצועיות. המשלוח היה מהיר וללא תקלות, התמונה הגיעה ארוזה היטב 
                            והמוצר המוגמר באיכות גבוהה ובדיוק כמו באתר, בלי הפתעות... 
                            אני נהנית להסתכל על התמונה, מאוד מוסיפה לחלל`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
