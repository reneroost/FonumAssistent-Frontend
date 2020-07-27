import { Injectable } from '@angular/core';
import { Varuosa } from '../mudel/varuosa';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VaruosadVanemadService {

  constructor(private http: HttpClient) { }

  tombaVanemadVaruosad(vanusePiir: number) {
    let paringuUrl = 'http://localhost:8080' + '/' + 'saaVanemadVaruosad' + '/' + vanusePiir;
    return this.http
      .get<Varuosa[]>(paringuUrl);
  }

  tombaHinnaSoovitus(varuosaId: number) {
    let paringuUrl = 'http://localhost:8080' + '/' + 'saaHinnaSoovitus' + '/' + varuosaId;
    return this.http.get<number>(paringuUrl);
  }
}
