import { Injectable } from '@angular/core';
import {Joke} from '../models/Joke';
import{ HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetJokeService {
  getUrls: string = 'https://api.chucknorris.io/jokes/random';
  constructor(private http: HttpClient) { }
  getJoke(): Observable<Joke>{
    return this.http.get<Joke>(this.getUrls);
  }
}
