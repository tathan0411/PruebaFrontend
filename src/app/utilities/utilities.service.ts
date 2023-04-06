import { Injectable } from '@angular/core';
import { Md5 } from "md5-typescript";
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  private search: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  getTime(): string {
    return new Date().getTime().toString();
  }

  encryptMd5(cadena: string): string {
    return Md5.init(cadena);
  }

  getAuthorization(): string {
    let time = this.getTime();
    return `ts=${time}&apikey=${environment.PUBLICKEY}&hash=${this.encryptMd5(time + environment.PRIVATEKEY + environment.PUBLICKEY)}`;
  }

  getSearch() {
    return this.search.asObservable();
  }

  setSearch(search: string) {
    this.search.next(search);
  }
}
