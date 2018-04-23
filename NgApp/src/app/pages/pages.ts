import { Component, Input} from '@angular/core';

import { Hero } from '../_models/Hero';

@Component({
  selector: 'app-pages',
  template: `<app-nav></app-nav><router-outlet></router-outlet>`
})
export class PagesComponent  {
}

