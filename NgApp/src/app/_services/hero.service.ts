import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../_models/Hero';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
    private tokeyKey = 'token';
    private token: string;
    private heroesUrl = 'http://localhost:5000/api/Heroes/';  // URL to web api
    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }
    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
                tap(heroes => this.log(`Kahramanlar Getirildi.`)),
                catchError(this.handleError('getHeroes', []))
            );
    }
    getHeroNo404<Data>(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}${id}`;
        return this.http.get<Hero[]>(url)
            .pipe(
                map(heroes => heroes[0]), // returns a {0|1} element array
                tap(h => {
                    const outcome = h ? `fetched` : `did not find`;
                    this.log(`${outcome} hero id=${id}`);
                }),
                catchError(this.handleError<Hero>(`getHero id=${id}`))
            );
    }
    getHero(id: number) {
        const url = `${this.heroesUrl}${id}`;
        return this.http.get<Hero>(url).pipe(
            tap(_ => this.log(`Getirilen Kahraman id=${id}`)),
            catchError(this.handleError<Hero>(`getHero id=${id}`))
        );
    }
    addHero(hero: Hero): Observable<Hero> {
        const headers: HttpHeaders = this.initAuthHeaders();
        const body = JSON.stringify(hero);
        console.log(headers);
        return this.http.post<Hero>(this.heroesUrl, body, { headers: headers }).pipe(
            tap((h: Hero) => this.log(`Ekleen Kahraman w/ id=${h.id}`)),
            catchError(this.handleError<Hero>('addHero'))
        );
    }
    deleteHero(hero: Hero | number): Observable<Hero> {
        const headers: HttpHeaders = this.initAuthHeaders();
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.heroesUrl}${id}`;

        return this.http.delete<Hero>(url, { headers: headers }).pipe(
            tap(_ => this.log(`deleted hero id=${id}`)),
            catchError(this.handleError<Hero>('deleteHero'))
        );
    }
    updateHero(hero: Hero): Observable<any> {
        const headers: HttpHeaders = this.initAuthHeaders();
        return this.http.put(this.heroesUrl, hero, { headers: headers }).pipe(
            tap(_ => this.log(`Güncelenen Kahraman id=${hero.id}`)),
            catchError(this.handleError<any>('updateHero'))
        );
    }
    searchHeroes(term: string): Observable<Hero[]> {
        this.log(term);
        if (!term.trim()) {
            return of([]);
        }
        return this.http.get<Hero[]>(`${this.heroesUrl}${term}`).pipe(
            tap(_ => this.log(`Arama Sonucunda Eşleşen Kahramanlar "${term}"`)),
            catchError(this.handleError<Hero[]>('searchHeroes', []))
        );
    }
    private initAuthHeaders(): HttpHeaders {
        const token = this.getLocalToken();
        if (token === null) { throw new Error('No token'); }

        const headerDict = {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*'
        }
        const requestOptions = {
            headers: new HttpHeaders(headerDict)
        };
        return requestOptions.headers;
    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: hatayı uzaktan günlüğe kaydetme altyapısına gönder
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
    private getLocalToken(): string {
        if (!this.token) {
            this.token = sessionStorage.getItem(this.tokeyKey) || '';
        }
        return this.token;
    }
    private log(message: string) {
        this.messageService.add('HeroService: ' + message);
    }
}
