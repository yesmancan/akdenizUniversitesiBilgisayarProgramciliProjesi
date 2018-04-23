import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../_models/Hero';
import { HeroService } from '../../_services/hero.service';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getHero();
    }

    getHero(): void {
        const id = +(this.route.snapshot.paramMap.get('id') || 0);
        this.heroService.getHero(id).subscribe(res => {
            this.hero = res;
        });
    }
    updateHero(hero: Hero) {
        this.heroService.updateHero(hero);
    }
    goBack(): void {
        this.location.back();
    }
}
