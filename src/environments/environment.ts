// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:  {
    apiKey: 'AIzaSyBK0IcLGdX4EqhsTWMHIW9bBkIpL8jSkKI',
    authDomain: "img-shop.firebaseapp.com",
    databaseURL: "https://img-shop.firebaseio.com",
    projectId: "img-shop",
    storageBucket: "img-shop.appspot.com",
    messagingSenderId: "71510518597",
    appId: "1:71510518597:web:17f1bd2ea36ce5d69b2c2c",
    measurementId: "G-T65YB4GCHY"
  },
   apiUrl:'http://localhost:3000'
  //apiUrl:''

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
