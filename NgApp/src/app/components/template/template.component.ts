import { Hero } from './../../_models/Hero';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HeroService } from '../../_services/hero.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  @Input() heroes$: Hero[];
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService, private nvs: NavComponent) { }

  search(term: string): void {
    this.heroService.searchHeroes(term).subscribe(
      (data) => this.heroes$ = data,
      (err) => console.error(err),
      () => console.log('done')
    );
  }
  ngOnInit() {
  }
  close(): void {
    this.nvs.SearchInfo = false;
  }
}
