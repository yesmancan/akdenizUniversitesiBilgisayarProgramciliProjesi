import { Component } from "@angular/core";
import { Platform, NavParams, ViewController } from "ionic-angular";

import { HomePage } from '../home/home';

import { HeroService } from './../../services/hero.service';
import { Hero } from "../../_models/Hero";

@Component({
  templateUrl: 'hero-add.html',
  styles: [`
  * img {
    display: table-row;
    object-fit: cover
    width: 2000px!importants;
  }
  .full-image img {
    width:100%!importants;
    height: 100%;
    display: table-row;
  }
`]
})
export class HeroAdd {
  hero: Hero = new Hero();
  checkUpdateOrAdd = false;
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public heroService: HeroService,
  ) {
    this.hero = this.params.get('hero');
    this.checkUpdateOrAdd = this.params.get('update') || false;
  }
  addHero(NewHero: Hero): void {
    this.heroService.addHero(NewHero).add(() => {
      this.viewCtrl._nav.setRoot(HomePage);
    });
  }
  updateHero(NewHero: Hero): void {
    this.heroService.updateHero(NewHero).add(() => {
      this.viewCtrl._nav.setRoot(HomePage);
    });
  }
  imgOnLoad(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.hero.imglink = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}