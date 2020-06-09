import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Varuosa } from '../mudel/varuosa';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VaruosaService2 {

  private baasUrl = 'http://localhost:8080/api/varuosad';

  constructor(private httpClient: HttpClient) { }

  getVaruosaNimekiri(): Observable<Varuosa[]> {
    const otsingUrl = `${this.baasUrl}`;

    return this.getVaruosad(otsingUrl);
  }

  getVaruosaNimekiriPaginate(leheNumber: number,
    leheSuurus: number): Observable<SaaVastusVaruosa> {
    const otsingUrl = `${this.baasUrl}` +
      `?page=${leheNumber}&size=${leheSuurus}`;

    return this.httpClient.get<SaaVastusVaruosa>(otsingUrl);
  }

  getVaruosa(varuosaId: number): Observable<Varuosa> {
    const varuosaUrl = `${this.baasUrl}/${varuosaId}`;

    return this.httpClient.get<Varuosa>(varuosaUrl);
  }

  otsiVaruosi(votmesona: string) {
    const otsingUrl = `${this.baasUrl}/search/findByNimiContaining?nimi=${votmesona}`;

    return this.getVaruosad(otsingUrl);
  }

  otsiVaruosiPaginate(
    leheNumber: number,
    leheSuurus: number,
    votmesona: string): Observable<SaaVastusVaruosa> {
    const otsingUrl = `${this.baasUrl}/search/findByNimiContaining?nimi=${votmesona}` +
      `&page=${leheNumber}&size=${leheSuurus}`;

    return this.httpClient.get<SaaVastusVaruosa>(otsingUrl);
  }

  private getVaruosad(otsingUrl: string) {
    return this.httpClient.get<SaaVastusVaruosa>(otsingUrl).pipe(map(vastus => vastus._embedded.varuosad));
  }
}

interface SaaVastusVaruosa {
  _embedded: {
    varuosad: Varuosa[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}