import { HeroUpdateComponent } from './pages/hero-update/hero-update.component';
import { HeroAddComponent } from './pages/hero-add/hero-add.component';
import { PagesComponent } from './pages/pages';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  {
    path: 'pages', component: PagesComponent, children: [
      { path: 'Heroes', component: HeroesComponent },
      { path: 'Hero/Add', component: HeroAddComponent, canActivate: [AuthGuardService] },
      { path: 'Heroes/Update/:id/:name', component: HeroUpdateComponent, canActivate: [AuthGuardService] },
      { path: 'Heroes/Detail/:id/:name', component: HeroDetailComponent }
    ]
  },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'Dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
