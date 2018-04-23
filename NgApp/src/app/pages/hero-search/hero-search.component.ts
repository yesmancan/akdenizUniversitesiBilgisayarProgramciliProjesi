import { HeroesComponent } from './../heroes/heroes.component';
import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Hero } from '../../_models/Hero';
import { HeroService } from '../../_services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  @Input() heroes$: Hero[];
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  search(term: string): void {
    this.heroService.searchHeroes(term).subscribe(
      (data) => this.heroes$ = data,
      (err) => console.error(err),
      () => console.log('done')
    );
  }

  ngOnInit(): void {

  }
}
