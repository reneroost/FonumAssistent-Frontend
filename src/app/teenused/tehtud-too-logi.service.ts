import { Injectable } from '@angular/core';
import { TehtudTooLogi } from '../mudel/tehtud-too-logi';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TehtudTooLogiService {

  constructor(private http: HttpClient) { }

  tombaTehtudToodeLogid() {
    return this.http
      .get<TehtudTooLogi[]>('http://localhost:8080/tehtudtoodelogid');
  }

  lisaLogi(tehtudTooLogi: TehtudTooLogi) {
    return this.http
      .post<{ tehtudToo: TehtudTooLogi }>(
        "http://localhost:8080/lisaTehtudtoologi",
        tehtudTooLogi
      ).subscribe();
  }
}
