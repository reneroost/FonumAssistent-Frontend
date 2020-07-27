import { Injectable } from '@angular/core';
import { TehtudToodeKogus } from '../mudel/tehtud-toode-kogus';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VaruosadEnimkulunudService {

  constructor(private http: HttpClient) { }

  tombaEnimkulunudVaruosad(periood: number, minKogus: number) {
    let paringuUrl = 'http://localhost:8080' + '/' + 'enimkulunudvaruosad' + '/' + periood + '/' + minKogus;
    return this.http
      .get<TehtudToodeKogus[]>(paringuUrl);
  }
}
