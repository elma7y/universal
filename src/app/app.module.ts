import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoCodeComponent } from './no-code/no-code.component';
import { WebDeveComponent } from './web-deve/web-deve.component';
import { UiuxComponent } from './uiux/uiux.component';
import { SocialComponent } from './social/social.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AccordionModule} from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JoinUsComponent } from './join-us/join-us.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { PrivacyComponent } from './privacy/privacy.component';
import { NgOptimizedImage } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    NoCodeComponent,
    WebDeveComponent,
    UiuxComponent,
    SocialComponent,
    PageNotFoundComponent,
    AboutComponent,
    JoinUsComponent,
    ContactComponent,
    PrivacyComponent,


  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollTopModule,
    NgOptimizedImage,
    ],
    providers: [
    ],
      bootstrap: [AppComponent]
})
export class AppModule { }
