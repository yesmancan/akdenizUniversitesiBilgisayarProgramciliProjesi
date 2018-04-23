import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Hero } from '../../_models/Hero';
import { HeroService } from '../../_services/hero.service';

@Component({
  selector: 'app-hero-update',
  templateUrl: './hero-update.component.html',
  styleUrls: ['./hero-update.component.scss']
})
export class HeroUpdateComponent implements OnInit {

  textValue = '';
  hero: Hero = new Hero();

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private rout: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.heroService.getHero(params.id).subscribe(
        data => this.hero = data,
        err => console.error(err),
        () => console.log('done')
      );
    });
  }

  imgOnLoad(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.hero.imglink = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  updateHero(NewHero: Hero): void {
    this.heroService.updateHero(NewHero)
      .subscribe(
        () => this.rout.navigate(['/pages/Heroes/Detail/', this.hero.id, this.hero.name])
      );
  }
}
