import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './module-matriel/module-matriel.module';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { PicSubMainPageComponent } from './components/pic-sub-main-page/pic-sub-main-page.component';
import { PicSubjectMainPageComponent } from './components/pic-subject-main-page/pic-subject-main-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LogInComponent } from './components/log-in/log-in.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';

import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';
 




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    AutocompleteComponent,
    ButtonsComponent,
    PicSubMainPageComponent,
    PicSubjectMainPageComponent,
    LogInComponent,
    ValidationErrorComponent,
    SignUpComponent,
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    CommonModule
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],


providers: [
  {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            'clientId'
          ),
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('723513601563548'),
        },
        {
          id: AmazonLoginProvider.PROVIDER_ID,
          provider: new AmazonLoginProvider(
            'clientId'
          ),
        },
      ],
    } as SocialAuthServiceConfig,
  }
],
bootstrap: [AppComponent]

})
export class AppModule { }
