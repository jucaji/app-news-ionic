import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Article, NewsResponse} from "../interfaces";
import {Observable} from "rxjs";

import { map } from 'rxjs/operators';

const apiKey = environment.apikey;
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  private executeQuery<T>( endpoint: string ) {
    return this.http.get<NewsResponse>(`${ apiUrl }${ endpoint }`,{
      params: {
        apiKey,
        country: 'us',
      }
    });
  }

  getTopHeadlines(): Observable<Article[]> {
     return this.executeQuery<NewsResponse>(`/top-headlines?country=co&category=technology`).pipe(
        map(({articles}) => articles)
     )
  };

  getTopHeadlinesByCategory(category: string): Observable<Article[]> {
    return this.executeQuery<NewsResponse>(`/top-headlines?country=co&category=${ category }`).pipe
    (map(({articles}) => articles));
  }
}
