import { Component, OnInit } from '@angular/core';
import { Varuosa } from 'src/app/mudel/varuosa';
import { VaruosadVanemadService } from 'src/app/teenused/varuosad-vanemad.service';
import { EsindusService } from 'src/app/teenused/esindus.service';
import { Esindus } from 'src/app/mudel/esindus';
import { YksikVaartusedService } from 'src/app/teenused/yksik-vaartused.service';
import { VaruosaService } from 'src/app/teenused/varuosa.service';

@Component({
  selector: 'app-hinna-langetus',
  templateUrl: './hinna-langetus.component.html',
  styleUrls: ['./hinna-langetus.component.css']
})
export class HinnaLangetusComponent implements OnInit {

  vanemadVaruosad: Varuosa[];
  esindused: Esindus[];
  piirVanus: number;
  hinnaSoovitus: number[] = [];
  soovitudHind: number[] = [];

  constructor(private varuosadVanemadTeenus: VaruosadVanemadService,
              private yksikVaartusedTeenus: YksikVaartusedService,
              private varuosaTeenus: VaruosaService) { }

  ngOnInit(): void {
    this.saaPiirVanusJaVanemadVaruosad();
  }

  muudaHinda(varuosa: Varuosa, soovitudHind: number, indeks: number) {
    varuosa.teenuseHind = soovitudHind; 
    this.varuosaTeenus.muudaVaruosa(varuosa).subscribe()
    this.vanemadVaruosad.splice(indeks, 1);
  }

  muudaSoovitudHinda(event, positsioon: number) {
    this.soovitudHind[positsioon] = Number(event.target.value);
  }

  suurendaSoovitudHinda(positsioon: number) {
    this.soovitudHind[positsioon]++;
  }

  vahendaSoovitudHinda(positsioon: number) {
    if (this.soovitudHind[positsioon] > 1) {
      this.soovitudHind[positsioon]--;
    }
  }

  muudaVanusePiirmaara(event) {
    this.piirVanus = Number(event.target.value);
    this.salvestaPiirVanusUus(this.piirVanus);
    this.saaVanemadVaruosad();
  }

  suurendaVanusePiirmaara() {
    this.piirVanus++;
    this.salvestaPiirVanusUus(this.piirVanus);
    this.saaVanemadVaruosad();
  }

  vahendaVanusePiirmaara() {
    this.piirVanus--;
    this.salvestaPiirVanusUus(this.piirVanus);
    this.saaVanemadVaruosad();
  }

  saaVanemadVaruosad() {
    this.varuosadVanemadTeenus.tombaVanemadVaruosad(this.piirVanus).subscribe(varuosad => {
      this.vanemadVaruosad = varuosad;
      this.saaHinnasoovitused();
    });
  }

  saaHinnasoovitused() {
    for (let varuosa of this.vanemadVaruosad) {
      this.varuosadVanemadTeenus.tombaHinnaSoovitus(varuosa.id).subscribe(arv => {
        this.hinnaSoovitus.push(arv);
        this.soovitudHind.push(arv);
      });
    }
  }

  saaPiirVanusJaVanemadVaruosad() {
    this.yksikVaartusedTeenus.tombaYksikVaartused().subscribe(yksikVaartused => {
      this.piirVanus = yksikVaartused[0].piirVanus;
      this.saaVanemadVaruosad();
    })
  }

  saaPiirVanus() {
    this.yksikVaartusedTeenus.tombaYksikVaartused().subscribe(yksikVaartused => {
      this.piirVanus = yksikVaartused[0].piirVanus;
    })
  }

  salvestaPiirVanusUus(uusVanus: number) {
    this.yksikVaartusedTeenus.salvestaPiirVanusUus(uusVanus);
  }
}
