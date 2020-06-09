import { Injectable } from '@angular/core';
import { Esindus } from '../mudel/esindus';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EsindusService {

    constructor(private http: HttpClient) { }

    looJaSalvestaEsindus(uusEsindus: Esindus) {
        this.http
            .post<{ esindus: Esindus }>(
                'http://localhost:8080/lisaEsindus',
                uusEsindus
            )
            .subscribe(vastuseAndmed => {
                // console.log(vastuseAndmed);
            });
    }

    tombaEsindused() {
        return this.http
            .get<{ [key: string]: Esindus }>('http://localhost:8080/esindused')
            .pipe(
                map(vastuseAndmed => {
                    const esindusteList: Esindus[] = [];
                    for (const key in vastuseAndmed) {
                        if (vastuseAndmed.hasOwnProperty(key)) {
                            esindusteList.push({ ...vastuseAndmed[key], id: key });
                        }
                    }
                    return esindusteList;
                })
            );
    }
}