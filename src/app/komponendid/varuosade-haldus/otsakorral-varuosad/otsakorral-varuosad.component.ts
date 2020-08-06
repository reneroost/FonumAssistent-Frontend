import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Varuosa } from 'src/app/mudel/varuosa';
import { map } from 'rxjs/operators';
import { YksikVaartused } from 'src/app/mudel/yksik-vaartused';
import { Esindus } from 'src/app/mudel/esindus';
import { VaruosadOtsakorralService } from 'src/app/teenused/varuosad-otsakorral.service';
import { EsindusService } from 'src/app/teenused/esindus.service';
import { YksikVaartusedService } from 'src/app/teenused/yksik-vaartused.service';

@Component({
  selector: 'app-otsakorral-varuosad',
  templateUrl: './otsakorral-varuosad.component.html',
  styleUrls: ['./otsakorral-varuosad.component.css']
})
export class OtsakorralVaruosadComponent implements OnInit {

  kriitiliseltOtsakorralVaruosad: Varuosa[];
  leebeltOtsakorralVaruosad: Varuosa[];
  yksikVaartused: YksikVaartused[];
  esindused: Esindus[];

  piirLeebe: number;
  piirKriitiline: number;

  constructor(private varuosadOtsakorralTeenus: VaruosadOtsakorralService,
              private yksikVaartusedTeenus: YksikVaartusedService,
              private esindusTeenus: EsindusService) { }

  ngOnInit(): void {
    this.saaPiiridJaOtsakorralVaruosad();
    this.saaEsindused();
  }

  muudaPiirmaaraKriitiline(event) {
    if (this.piirLeebe <= Number(event.target.value)) {
      this.piirLeebe = Number(event.target.value) + 1;
    }
    this.piirKriitiline = Number(event.target.value);
    this.muudaYksikVaartused();
    this.saaOtsakorralVaruosad();
  }

  suurendaPiirmaaraKriitiline() {
    if (this.piirLeebe === this.piirKriitiline + 1) {
      this.piirLeebe++;
    }
    this.piirKriitiline++;
    this.muudaYksikVaartused();
    this.saaOtsakorralVaruosad();
  }

  vahendaPiirmaaraKriitiline() {
    if (this.piirKriitiline > 1) {
      this.piirKriitiline--;
    }
    this.muudaYksikVaartused();
    this.saaOtsakorralVaruosad();
  }

  muudaPiirmaaraLeebe(event) {
    if (this.piirKriitiline >= Number(event.target.value)) {
      this.piirKriitiline = Number(event.target.value) - 1;
    }
    this.piirLeebe = Number(event.target.value);
    this.muudaYksikVaartused();
    this.saaOtsakorralVaruosad();
  }

  suurendaPiirmaaraLeebe() {
    this.piirLeebe++;
    this.muudaYksikVaartused();
    this.saaOtsakorralVaruosad();
  }

  vahendaPiirmaaraLeebe() {
    if (this.piirLeebe > 1) {
      this.piirLeebe--;
      if (this.piirKriitiline === this.piirLeebe) {
        this.piirKriitiline--;
      }
    }
    this.muudaYksikVaartused();
    this.saaOtsakorralVaruosad();
  }

  muudaYksikVaartused() {
    this.yksikVaartusedTeenus.salvestaYksikVaartused(new YksikVaartused(this.piirLeebe, this.piirKriitiline));
  }

  saaOtsakorralVaruosad() {
    this.varuosadOtsakorralTeenus.tombaOtsakorralVaruosad(this.piirKriitiline + 1, this.piirLeebe).subscribe(varuosad => {
      this.leebeltOtsakorralVaruosad = varuosad;
    });
    this.varuosadOtsakorralTeenus.tombaOtsakorralVaruosad(0, this.piirKriitiline).subscribe(varuosad => {
      this.kriitiliseltOtsakorralVaruosad = varuosad;
    });
  }

  saaPiiridJaOtsakorralVaruosad() {
    this.yksikVaartusedTeenus.tombaYksikVaartused().subscribe(vaartused => {
      this.piirKriitiline = vaartused[0].piirKriitiline;
      this.piirLeebe = vaartused[0].piirLeebe;
      this.saaOtsakorralVaruosad();
    });
  }

  saaEsindused() {
    this.esindusTeenus.tombaEsindused().subscribe(esindused => {
      this.esindused = esindused;
    });
  }

}
