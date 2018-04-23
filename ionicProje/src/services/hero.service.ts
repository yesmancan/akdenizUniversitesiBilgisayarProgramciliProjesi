import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

import { Hero } from '../_models/Hero';

@Injectable()
export class HeroService {

    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    requestOptions = {
        headers: new Headers(this.headerDict)
    };

    private heroesUrl = 'http://localhost:5000/api/Heroes/';  // URL to web api
    Heroes: Hero[] = [];
    hero: Hero;
    constructor(private http: Http) { }

    getHeroes() {
        return this.http.get(this.heroesUrl, this.requestOptions)
            .map(res => res.json() as Hero[]);
    };

    getHero(id: number) {
        return this.http.get(this.heroesUrl + id)
            .map(res => {
                return res.json()
            });
    }
    addHero(NewHero: Hero) {
        let body = JSON.stringify(NewHero);
        let headers = this.requestOptions;
        return this.http.post(this.heroesUrl, body, headers)
            .map(res => res.json() as Hero)
            .subscribe(() => {
                console.log('done');
            });
    }
    deleteHeroes(id: number) {
        return this.http.delete(this.heroesUrl + id).map(data => {
            console.log(data);
        })
    }
    updateHero(hero: Hero) {
        let body = JSON.stringify(hero);
        return this.http.put(this.heroesUrl, body, this.requestOptions).subscribe(res => {

        });
    }
}