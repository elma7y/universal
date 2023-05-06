import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { NoCodeComponent } from './no-code/no-code.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SocialComponent } from './social/social.component';
import { UiuxComponent } from './uiux/uiux.component';
import { WebDeveComponent } from './web-deve/web-deve.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  { path: '',  component:HeaderComponent, },
  {path: 'noCode', component:NoCodeComponent },
  {path: 'web-development',component:WebDeveComponent },
  {path: 'uiUx',component:UiuxComponent },
  {path:'social',component:SocialComponent},
  {path:'about',component:AboutComponent,},
  {path:'join-us',component:JoinUsComponent},
  {path:'contact',component:ContactComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'react',component:WebDeveComponent},
  {path:'angular',component:WebDeveComponent},
  {path:'vue',component:WebDeveComponent},
  {path:'nodejs',component:WebDeveComponent},
  {path:'django',component:WebDeveComponent},
  {path:'laravel',component:WebDeveComponent},
  {path:'php',component:WebDeveComponent},
  {path:'webflow',component:WebDeveComponent},
  {path:'wix',component:WebDeveComponent},
  {path:'wordpress',component:WebDeveComponent},
  {path:'dotnet',component:WebDeveComponent},
  {path: 'zapier', component:NoCodeComponent },
  {path: 'smartsuite', component:NoCodeComponent },
  {path: 'airtable', component:NoCodeComponent },
  {path: 'photoshop',component:UiuxComponent },
  {path: 'adobe illustrator',component:UiuxComponent },
  {path: 'figma',component:UiuxComponent },
  {path: 'xd',component:UiuxComponent },





  



  







  











  { path: '**', component:PageNotFoundComponent},
];

@NgModule({
  imports:
    [ RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
