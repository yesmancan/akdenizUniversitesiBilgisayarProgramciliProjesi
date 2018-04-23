import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { Hero } from '../../_models/Hero';
import { HeroService } from '../../services/hero.service';

import { ModalContentPage } from "../hero-detail/modal-content-page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  heroes: Hero[];
  hero: Hero = new Hero;
  posts: any;
  constructor(public navCtrl: NavController, private heroService: HeroService, public modalCtrl: ModalController) { }
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    this.heroService.getHeroes().subscribe(
      (data) => this.heroes = data,
      (err) => console.log(err),
      () => console.log('done')
    )
  }
  openModal(hero: Hero) {
    this.hero = hero;
    let modal = this.modalCtrl.create(ModalContentPage, hero);
    modal.present();
  }
  deleteHero(id: number) {
    this.heroService.deleteHeroes(id).subscribe(res => {
      this.getHeroes();
    });
  }
}