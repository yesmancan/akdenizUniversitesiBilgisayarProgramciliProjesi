import { Component } from '@angular/core';

import { Hero } from '../../_models/Hero';
import { HeroService } from '../../_services/hero.service';

@Component({
    selector: 'app-heroes-add',
    templateUrl: './hero-add.component.html',
    styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent {
    textValue = '';
    hero: Hero = new Hero();

    constructor(private heroService: HeroService) { }
    imgOnLoad(event: any) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.hero.imglink = e.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    AddHero(NewHero: Hero): void {
        this.heroService.addHero(NewHero)
            .subscribe(res => console.log(res));
    }
}
