import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from './typescripts/free';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AuthService as AuthLoginService } from './_services/auth.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { HeroService } from './_services/hero.service';
import { MessageService } from './_services/message.service';

import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';
import { PreloaderComponent } from './components/preloader/preloader.component';

import { PagesComponent } from './pages/pages';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroAddComponent } from './pages/hero-add/hero-add.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './pages/hero-search/hero-search.component';
import { LoginComponent } from './pages/login/login.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { TemplateComponent } from './components/template/template.component';
import { HeroUpdateComponent } from './pages/hero-update/hero-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    HeroesComponent,
    HeroAddComponent,
    HeroDetailComponent,
    LoginComponent,
    PagesComponent,
    MessagesComponent,
    PreloaderComponent,
    BreadcrumbsComponent,
    HeroSearchComponent,
    TemplateComponent,
    HeroUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthLoginService,
    AuthGuardService,
    HeroService,
    NavComponent,
    MessageService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
