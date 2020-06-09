import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Esindus } from 'src/app/mudel/esindus';
import { Varuosa } from 'src/app/mudel/varuosa';
import { VaruosaService2 } from 'src/app/teenused/varuosa2.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-varuosade-kuvamine2',
  templateUrl: './varuosade-kuvamine2.component.html',
  styleUrls: ['./varuosade-kuvamine2.component.css']
})
export class VaruosadeKuvamine2Component implements OnInit {

  varuosad: Varuosa[];
  esindused: Esindus[];

  leheNumber = 1;
  leheSuurus = 10;
  artikleidKokku = 70;

  onTombamas = false;

  constructor(private varuosaTeenus: VaruosaService2,
              private marsruut: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.saaEsindused();
    this.marsruut.paramMap.subscribe(() => {
      this.kasitleVaruosaNimekiri();
    });
  }

  kasitleVaruosaNimekiri() {
    this.onTombamas = true;
    this.varuosaTeenus.getVaruosaNimekiriPaginate(
      this.leheNumber - 1,
      this.leheSuurus)
      .subscribe(this.varuosadJsonMuutujateks());
    this.onTombamas = false;
  }

  varuosadJsonMuutujateks() {
    return andmed => {
      this.varuosad = andmed._embedded.varuosad;
      this.leheNumber = andmed.page.number + 1;
      this.leheSuurus = andmed.page.size;
      this.artikleidKokku = andmed.page.totalElements;
    };
  }

  uuendaLeheSuurust(leheSuurus: number) {
    this.leheSuurus = leheSuurus;
    this.leheNumber = 1;
    this.kasitleVaruosaNimekiri();
  }

  saaEsindused() {
    this.http
      .get<{ [key: string]: Esindus }>('http://localhost:8080/esindused')
      .pipe(map(vastuseAndmed => {
        const esindusteList: Esindus[] = [];
        for (const key in vastuseAndmed) {
          if (vastuseAndmed.hasOwnProperty(key)) {
            esindusteList.push({ ...vastuseAndmed[key], id: key });
          }
        }
        return esindusteList;
      })).subscribe(andmed => {
        this.esindused = andmed;
      });
  }
}
