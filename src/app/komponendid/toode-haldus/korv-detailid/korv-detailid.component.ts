import { Component, OnInit } from '@angular/core';
import { KorvArtikkel } from 'src/app/mudel/korv-artikkel';
import { KorvService } from 'src/app/teenused/korv.service';
import { TehtudTooLogi } from 'src/app/mudel/tehtud-too-logi';
import { TehtudTooLogiService } from 'src/app/teenused/tehtud-too-logi.service';
import { VaruosaService } from 'src/app/teenused/varuosa.service';
import { Varuosa } from 'src/app/mudel/varuosa';

@Component({
  selector: 'app-korv-detailid',
  templateUrl: './korv-detailid.component.html',
  styleUrls: ['./korv-detailid.component.css']
})
export class KorvDetailidComponent implements OnInit {

  korvArtiklid: KorvArtikkel[] = [];
  tehtudTooLogid: TehtudTooLogi[] = [];
  vaheSumma: number = 0;
  summaVaruosad: number = 0;
  summaTehing: number = 0;
  kogus: number = 0;
  aegVormindatud;

  constructor(private korvTeenus: KorvService,
              private varuosaTeenus: VaruosaService,
              private tehtudTooLogiTeenus: TehtudTooLogiService) { }

  ngOnInit(): void {
    this.saaKorviArtiklid();
  }

  saaKorviArtiklid() {
    this.korvArtiklid = this.korvTeenus.korvArtiklid;

    this.korvTeenus.vaheSumma.subscribe(
      andmed => this.vaheSumma = andmed
    );
    this.korvTeenus.summaVaruosad.subscribe(
      andmed => this.summaVaruosad = andmed
    );
    this.korvTeenus.summaTehing.subscribe(
      andmed => this.summaTehing = andmed
    );
    this.korvTeenus.kogus.subscribe(
      andmed => this.kogus = andmed
    );
    this.korvTeenus.arvutaKorviKogusJaSummad();
  }

  muudaKogustKasitsi(event, korvArtikkel: KorvArtikkel) {
    korvArtikkel.kogus = Number(event.target.value);
    this.korvTeenus.arvutaKorviKogusJaSummad();
  }
  suurendaKogust(ajutineKorviArtikkel: KorvArtikkel) {
    if (ajutineKorviArtikkel.kogus < ajutineKorviArtikkel.maxKogus) {
      this.korvTeenus.lisaToo(ajutineKorviArtikkel);
    }
  }
  vahendaKogust(ajutineKorviArtikkel: KorvArtikkel) {
    this.korvTeenus.vahendaKogust(ajutineKorviArtikkel);
  }

  muudaVahesummatKasitsi(event, korvArtikkel: KorvArtikkel) {
    korvArtikkel.vaheSumma = Number(event.target.value);
    this.korvTeenus.arvutaKorviKogusJaSummadVahesummaKasitsi();
  }
  suurendaVahesummat(korvArtikkel: KorvArtikkel) {
    korvArtikkel.vaheSumma += 10;
    this.korvTeenus.arvutaKorviKogusJaSummadVahesummaKasitsi();
  }
  vahendaVahesummat(korvArtikkel: KorvArtikkel) {
    korvArtikkel.vaheSumma -= 10;
    this.korvTeenus.arvutaKorviKogusJaSummadVahesummaKasitsi();  }

  kinnitaTood() {
    for (let korvArtikkel of this.korvArtiklid) {
      const tehtudTooLogi: TehtudTooLogi = new TehtudTooLogi(korvArtikkel);
      let varuosa: Varuosa;
      this.varuosaTeenus.getVaruosa(korvArtikkel.varuosaId).subscribe(andmed => {
        varuosa = andmed;
        varuosa.kogus -= korvArtikkel.kogus;
        if (korvArtikkel.valitudEsindus == 0) {
          varuosa.kogusKristiineKeskuses -= korvArtikkel.kogus;
        } else if (korvArtikkel.valitudEsindus == 1) {
          varuosa.kogusViruKeskuses -= korvArtikkel.kogus;
        } else if (korvArtikkel.valitudEsindus == 2) {
          varuosa.kogusLounaKeskuses -= korvArtikkel.kogus;
        }
        this.varuosaTeenus.muudaVaruosa(varuosa).subscribe();
      });
      tehtudTooLogi.teenuseHind = korvArtikkel.vaheSumma;
      this.tehtudTooLogiTeenus.lisaLogi(tehtudTooLogi);
    }
    this.korvArtiklid.length = 0;
  }
}
