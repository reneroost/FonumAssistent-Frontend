import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Varuosa } from '../mudel/varuosa';
import { map } from 'rxjs/operators';
import { YksikVaartused } from '../mudel/yksik-vaartused';

@Injectable({
  providedIn: 'root'
})
export class VaruosadOtsakorralService {

  constructor(private http: HttpClient) { }

  tombaOtsakorralVaruosad(miinimum: number, maksimum: number) {
    let paringuUrl = 'http://localhost:8080' + '/' + 'saaOtsakorralVaruosad' + '/' + miinimum + '/' + maksimum;
    return this.http
      .get<Varuosa[]>(paringuUrl);
  }

}
