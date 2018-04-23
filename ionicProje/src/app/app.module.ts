import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { ModalContentPage } from "../pages/hero-detail/modal-content-page";
import { HeroAdd } from "../pages/hero-add/hero-add";

import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

import { MDBBootstrapModule } from '../typescripts/free';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ModalContentPage,
    HeroAdd
  ],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ModalContentPage,
    HeroAdd
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule,
    MDBBootstrapModule,
    IonicModule.forRoot(MyApp)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HeroService,
    MessageService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  bootstrap: [IonicApp]
})
export class AppModule { }
