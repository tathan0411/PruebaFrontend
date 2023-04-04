import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Heroes } from '../../../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroes> {
    return this.http.get<Heroes>(`${environment.apiURL}/characters?ts=1680570667&apikey=f8c01215880fa16ca2e623e1d51806c1&hash=6466cb58fe4351d867fbc2eb2df3ec83`);
  }

  getHeroe(hero: string): Observable<Heroes> {
    return this.http.get<Heroes>(`${environment.apiURL}/characters?query=${hero}&ts=1680570667&apikey=f8c01215880fa16ca2e623e1d51806c1&hash=6466cb58fe4351d867fbc2eb2df3ec83`);
  }
}
