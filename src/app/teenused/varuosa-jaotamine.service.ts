import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VaruosaJaotus } from '../mudel/varuosa-jaotus';
import { map } from 'rxjs/operators';
import { Varuosa } from '../mudel/varuosa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaruosaJaotamineService {

  constructor(private http: HttpClient) { }

  tombaVaruosaJaotusedEsinduseKohta(valitudEsindus: number) {
    return this.http
      .get<VaruosaJaotus[]>('http://localhost:8080/varuosaJaotusedEsinduseKohta/' + valitudEsindus);
  }
}
