import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PicSubMainPageComponent } from './components/pic-sub-main-page/pic-sub-main-page.component';
import { PicMainSubListComponent } from './components/pic-main-sub-list/pic-main-sub-list.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { ShoppingBagComponent } from './components/shopping-bag/shopping-bag.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { ImgHomeLivingRoomComponent } from './components/img-home-living-room/img-home-living-room.component';
import { ManagementComponent } from './components/management/management.component';
import { ManagementGuardService } from './components/hedder/hedder.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { DiscountComponent } from './components/discount/discount.component';
import { NewImgComponent } from './new-img/new-img.component';


const routes: Routes = [
  { path:'pic-sub-main-page',     component:PicSubMainPageComponent},
  { path:'pic-main-list-subjects/:id',   component:PicMainSubListComponent},
  { path:'img-details/:subId/:id',   component:ImageDetailsComponent},
  { path:'img-details/shpping-cart',   component:ShoppingBagComponent},
  { path:'app-payment-form',   component:PaymentFormComponent},
  { path:'img-home-living-room',   component:ImgHomeLivingRoomComponent},
  { path:'auth/signup',   component:PicSubMainPageComponent},
  { path:'auth/signin',   component:PicSubMainPageComponent},
  { path:'contact-us',   component:ContactUsComponent},
  { path:'about-us',   component:AboutUsComponent},
  { path:'recommendations',   component:RecommendationsComponent},
  { path:'discount',   component:DiscountComponent},
  { path:'new-img',   component:NewImgComponent},
  { path:'management',   component:ManagementComponent, canActivate:[ManagementGuardService]},
  { path:'',          redirectTo:'pic-sub-main-page', pathMatch: 'full'},
  { path:'**',        redirectTo:'home', pathMatch: 'full'},

 
];
  
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
