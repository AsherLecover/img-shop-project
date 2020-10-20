import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './module-matriel/module-matriel.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PicSubMainPageComponent } from './components/pic-sub-main-page/pic-sub-main-page.component';
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

import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider,FacebookLoginProvider,AmazonLoginProvider,} from 'angularx-social-login';
import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFirestoreModule} from '@angular/fire/firestore'
import { from } from 'rxjs';
import { ClinetsService } from './servises/clinets.service';
import { environment } from '../environments/environment.prod';
import { PicMainSubListComponent } from './components/pic-main-sub-list/pic-main-sub-list.component';
import { HedderComponent } from './components/hedder/hedder.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { ShoppingBagComponent } from './components/shopping-bag/shopping-bag.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PicSubMainPageComponent,
    LogInComponent,
    SignUpComponent,
    PicMainSubListComponent,
    HedderComponent,
    FooterComponent,
    ImageDetailsComponent,
    ShoppingBagComponent,
    PaymentFormComponent,
  ],
  imports: [
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule,
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
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule

    
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],


providers: [ClinetsService],
bootstrap: [AppComponent]

})
export class AppModule { }
