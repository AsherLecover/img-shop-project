import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PicSubMainPageComponent } from './components/pic-sub-main-page/pic-sub-main-page.component';
import { PicMainSubListComponent } from './components/pic-main-sub-list/pic-main-sub-list.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { ShoppingBagComponent } from './components/shopping-bag/shopping-bag.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';


const routes: Routes = [
  { path:'pic-sub-main-page',     component:PicSubMainPageComponent},
  { path:'pic-main-list-subjects/:id',   component:PicMainSubListComponent},
  { path:'img-details/:subId/:id',   component:ImageDetailsComponent},
  { path:'shpping-cart',   component:ShoppingBagComponent},
  { path:'app-payment-form',   component:PaymentFormComponent},
  { path:'',          redirectTo:'pic-sub-main-page', pathMatch: 'full'},
  { path:'**',        redirectTo:'home', pathMatch: 'full'},

 
];
  
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
