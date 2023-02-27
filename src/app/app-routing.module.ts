import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { NoCodeComponent } from './no-code/no-code.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SocialComponent } from './social/social.component';
import { UiuxComponent } from './uiux/uiux.component';
import { WebDeveComponent } from './web-deve/web-deve.component';

const routes: Routes = [
  // { path: '',   redirectTo: 'header', pathMatch: 'full' }, 
  { path: '',  component:HeaderComponent },
  { path: 'noCode', component:NoCodeComponent },
  { path: 'web-development',component:WebDeveComponent },
  { path: 'uiux',component:UiuxComponent },
  {path:'social',component:SocialComponent},
  {path:'Contact',component:ContactComponent},

  { path: '**', component:PageNotFoundComponent},



];

@NgModule({
  imports:
     [ RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
