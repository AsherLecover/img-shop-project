import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { PicSubMainPageComponent } from './components/pic-sub-main-page/pic-sub-main-page.component';
import { PicSubjectMainPageComponent } from './components/pic-subject-main-page/pic-subject-main-page.component';

import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { MainNavComponent } from './main-nav/main-nav.component';


const routes: Routes = [
  { path:'',    component:HomeComponent ,
  children:[
    { path:'card',   component:CardComponent},
    { path:'autocomplete',     component:AutocompleteComponent},
    { path:'buttons',     component:ButtonsComponent},
    { path:'pic-sub-main-page',     component:PicSubMainPageComponent},
    { path:'pic-subject-main-page',     component:PicSubjectMainPageComponent},
    { path:'nav',     component:MainNavComponent},


    

    

    { path:'',          redirectTo:'home', pathMatch: 'full'},
    { path:'**',        redirectTo:'home', pathMatch: 'full'},]
  
  },]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
