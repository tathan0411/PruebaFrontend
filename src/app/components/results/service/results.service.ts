import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Heroes } from '../../../models/response.model';
import { UtilitiesService } from 'src/app/utilities/utilities.service';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient, private _utilitiesService: UtilitiesService) { }

  getHeroes(search: string): Observable<Heroes> {
    return this.http.get<Heroes>(`${environment.apiURL}characters${search != '' ? '?name=' + search + '&' : '?'}${this._utilitiesService.getAuthorization()}&limit=100`);
  }

  getHeroe(heroId: number): Observable<Heroes> {
    return this.http.get<Heroes>(`${environment.apiURL}characters/${heroId}?${this._utilitiesService.getAuthorization()}`);
  }
}
