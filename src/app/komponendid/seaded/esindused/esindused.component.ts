import { Component, OnInit } from '@angular/core';
import { Esindus } from 'src/app/mudel/esindus';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EsindusService } from 'src/app/teenused/esindus.service';

@Component({
  selector: 'app-esindused',
  templateUrl: './esindused.component.html',
  styleUrls: ['./esindused.component.css']
})
export class EsindusedComponent implements OnInit {

  naita: boolean = false;
  nupuNimi: any = 'Näita';
  onTombamas = false;

  esindused: Esindus[];

  constructor(private http: HttpClient,
              private esindusTeenus: EsindusService) { }

  ngOnInit(): void {
    this.onTombamas = true;
    this.esindusTeenus.tombaEsindused().subscribe(esindused => {
      this.esindused = esindused;
      this.onTombamas = false;
    });
  }

  onLooUusEsindus(esinduseAndmed: Esindus) {
    this.esindusTeenus.looJaSalvestaEsindus(esinduseAndmed);
  }

  onTombaEsindused() {
    this.onTombamas = true;
    this.esindusTeenus.tombaEsindused().subscribe(esindused => {
      this.esindused = esindused;
      this.onTombamas = false;
    });
  }


  naitaPeidaLyliti() {
    this.naita = !this.naita;

    if (this.naita) {
      this.nupuNimi = "Peida";
    } else {
      this.nupuNimi = "Näita";
    }
  }

}
