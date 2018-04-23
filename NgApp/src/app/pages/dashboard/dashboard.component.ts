import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../../_models/hero';
import { HeroService } from '../../_services/hero.service';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    @Input() heroes: Hero[];

    constructor(private heroService: HeroService, private nvs: NavComponent) { }
    ckeck = this.nvs.isAuthenticated();
    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes.slice(0, 5));
    }

}
