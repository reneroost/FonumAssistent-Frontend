import { Injectable } from '@angular/core';
import { YksikVaartused } from '../mudel/yksik-vaartused';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YksikVaartusedService {

  baasUrl = 'http://localhost:8080';
  yksikVaartusedUrl = 'yksikVaartused';

  constructor(private http: HttpClient) { }

  tombaYksikVaartused() {
    return this.http
      .get<YksikVaartused[]>(this.baasUrl + '/' + this.yksikVaartusedUrl);
  }

  // tombaYksikVaartusedVana() {
  //   return this.http
  //     .get<{ [key: string]: YksikVaartused }>(this.baasUrl + '/' + this.yksikVaartusedUrl)
  //     .pipe(
  //       map(vastuseAndmed => {
  //         const yksikVaartusedList: YksikVaartused[] = [];
  //         for (const key in vastuseAndmed) {
  //           if (vastuseAndmed.hasOwnProperty(key)) {
  //             yksikVaartusedList.push({ ...vastuseAndmed[key], id: key });
  //           }
  //         }
  //         return yksikVaartusedList;
  //       })
  //     );
  // }

  salvestaYksikVaartused(uusYksikVaartused: YksikVaartused) {
    this.http
      .put<{ yksikVaartused: YksikVaartused }>(
        'http://localhost:8080/muudaYksikVaartused',
        uusYksikVaartused
      ).subscribe();
  }

  salvestaPiirVanusUus(uusVanus: number) {
    this.http
      .get<{ yksikVaartused: YksikVaartused }>(
        'http://localhost:8080/muudaPiirVanus' + '/' + uusVanus
      ).subscribe();
  }
}
