import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Esindus } from '../mudel/esindus';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EsindusService {

    constructor(private http: HttpClient) { }

    tombaEsindused() {
        return this.http
            .get<Esindus[]>('http://localhost:8080/esindused');
    }

    saadaEsindus(uusEsindus: Esindus) {
        this.http
            .post<{ esindus: Esindus }>(
                'http://localhost:8080/lisaEsindus',
                uusEsindus
            ).subscribe();
    }

}