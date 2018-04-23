import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { HeroAdd } from "../hero-add/hero-add";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  THome = HomePage;
  TAbout = AboutPage;
  TContact = ContactPage;
  THeroAdd = HeroAdd;

  constructor() {

  }
}
