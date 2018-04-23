import { HeroAdd } from './../hero-add/hero-add';
import { Component, Input } from "@angular/core";

import { Platform, NavParams, ViewController } from "ionic-angular";

import { Hero } from "../../_models/Hero";

@Component({
  templateUrl: 'modal-content.html',
  styles: [`
  ion-img {
    display: table-row;
    object-fit: cover
  }
  .full-image {
    width: 100%;
    height: 100%;
    display: table-row;
  }
`]
})
export class ModalContentPage {
  @Input() hero: Hero = new Hero;
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
  ) { }

  UpdateHero(hero: Hero): void {
    this.viewCtrl._nav.setRoot(HeroAdd, { hero: hero, update: true });
  }
  ngOnInit(): void {
    this.hero = this.params.get('char');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}