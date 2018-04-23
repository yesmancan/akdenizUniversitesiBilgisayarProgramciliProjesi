import { Component, OnInit, Input, Output } from '@angular/core';

import { Hero } from '../../_models/Hero';
import { HeroService } from '../../_services/hero.service';

import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    @Input() heroes: Hero[] = [];
    constructor(private heroService: HeroService, private nvs: NavComponent) { }
    ckeck = this.nvs.isAuthenticated();

    ngOnInit() {
        this.getHeroes();
    }
    search(term: string): void {
        this.heroService.searchHeroes(term).subscribe(
            (data) => this.heroes = data,
            (err) => console.error(err),
            () => console.log('done')
        );
    }
    getHeroes() {
        this.heroService.getHeroes()
            .subscribe(
                (data) => this.heroes = data,
                (err) => console.log(err),
                () => console.log('heroes')
            );
    }
    deleteHero(id: number) {
        this.heroService.deleteHero(id).subscribe(res => {
            console.log(res);
            this.getHeroes();
        });
    }
}
