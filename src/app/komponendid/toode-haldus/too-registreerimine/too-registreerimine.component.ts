import { Component, OnInit } from '@angular/core';
import { Varuosa } from 'src/app/mudel/varuosa';
import { Esindus } from 'src/app/mudel/esindus';
import { VaruosaService } from 'src/app/teenused/varuosa.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { KorvArtikkel } from 'src/app/mudel/korv-artikkel';
import { KorvService } from 'src/app/teenused/korv.service';
import { VaruosaJaotamineService } from 'src/app/teenused/varuosa-jaotamine.service';

@Component({
  selector: 'app-too-registreerimine',
  templateUrl: './too-registreerimine.component.html',
  styleUrls: ['./too-registreerimine.component.css']
})
export class TooRegistreerimineComponent implements OnInit {

  varuosad: Varuosa[];
  esindused: Esindus[];
  summa: number = 0.00;
  kogus: number = 0;

  onTombamas = false;
  valitudEsindus = 0;

  valikud = [
    { id: 0, nimi: "Kristiine" },
    { id: 1, nimi: "Viru" },
    { id: 2, nimi: "Lõunakeskus" }
  ];

  constructor(private varuosaTeenus: VaruosaService,
              private http: HttpClient,
              private korvTeenus: KorvService) { }

  ngOnInit(): void {
    this.uuendaKorviOlekut();
    this.saaEsindused();
    this.tombaVaruosad(this.valitudEsindus);
  }

  valiEsindus(vaartus) {
    this.valitudEsindus = Number(vaartus);
    this.tombaVaruosad(this.valitudEsindus);
  }

  tombaVaruosad(value: number) {
    this.valitudEsindus = value;
    this.varuosaTeenus.saaVaruosadEsindusePohjal(value).subscribe(varuosad => {
      this.varuosad = varuosad;
    })
    return this.varuosad;
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

  lisaToo(varuosa: Varuosa) {
    const korvArtikkel = new KorvArtikkel(varuosa, this.valitudEsindus);
    this.korvTeenus.lisaToo(korvArtikkel);
  }

  uuendaKorviOlekut() {
    this.korvTeenus.summaTehing.subscribe(
      vastus => this.summa = vastus
    );
    this.korvTeenus.kogus.subscribe(
      vastus => this.kogus = vastus
    );

  }
}
