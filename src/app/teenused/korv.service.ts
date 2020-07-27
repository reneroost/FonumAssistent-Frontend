import { Injectable } from '@angular/core';
import { KorvArtikkel } from '../mudel/korv-artikkel';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KorvService {

  korvArtiklid: KorvArtikkel[] = [];
  vaheSumma: Subject<number> = new Subject<number>();
  summaVaruosad: Subject<number> = new Subject<number>();
  summaTehing: Subject<number> = new Subject<number>();
  kogus: Subject<number> = new Subject<number>();

  constructor() { }

  lisaToo(korvArtikkel: KorvArtikkel) {
    let onJubaKorvis: boolean = false;
    let eksisteerivKorviArtikkel: KorvArtikkel  = undefined;

    if (this.korvArtiklid.length > 0) {
      eksisteerivKorviArtikkel = this.korvArtiklid.find(ajutineArtikkel => ajutineArtikkel.varuosaId === korvArtikkel.varuosaId);
    }
    onJubaKorvis = (eksisteerivKorviArtikkel != undefined);

    if (onJubaKorvis) {
      eksisteerivKorviArtikkel.kogus++;
    } else {
      this.korvArtiklid.push(korvArtikkel);
    }

    this.arvutaKorviKogusJaSummad();
  }

  vahendaKogust(korvArtikkel: KorvArtikkel) {
    korvArtikkel.kogus--;

    if( korvArtikkel.kogus === 0) {
      this.eemaldaArtikkel(korvArtikkel);
    } else { 
      this.arvutaKorviKogusJaSummad();
    }
  }

  eemaldaArtikkel(korvArtikkel: KorvArtikkel) {
    const artikliIndeks = this.korvArtiklid.findIndex(ajutineKorvArtikkel => ajutineKorvArtikkel.varuosaId === korvArtikkel.varuosaId)
  
    if (artikliIndeks > -1) {
      this.korvArtiklid.splice(artikliIndeks, 1);
      this.arvutaKorviKogusJaSummad();
    }
  }

  arvutaKorviKogusJaSummad() {
    let omaHindKokku: number = 0;
    let myygiHindKokku: number = 0;
    let kogusKokku: number = 0;

    for (let korvArtikkel of this.korvArtiklid) {
      korvArtikkel.vaheSumma = korvArtikkel.teenuseHind * korvArtikkel.kogus;
      omaHindKokku += korvArtikkel.artikliHind * korvArtikkel.kogus
      myygiHindKokku += korvArtikkel.teenuseHind * korvArtikkel.kogus;
      kogusKokku += korvArtikkel.kogus;
    }

    this.summaVaruosad.next(omaHindKokku);
    this.summaTehing.next(myygiHindKokku);
    this.kogus.next(kogusKokku);
  }

  arvutaKorviKogusJaSummadVahesummaKasitsi() {
    let omaHindKokku: number = 0;
    let myygiHindKokku: number = 0;
    let kogusKokku: number = 0;

    for (let korvArtikkel of this.korvArtiklid) {
      omaHindKokku += korvArtikkel.artikliHind * korvArtikkel.kogus
      myygiHindKokku += korvArtikkel.vaheSumma;
      kogusKokku += korvArtikkel.kogus;
    }

    this.summaVaruosad.next(omaHindKokku);
    this.summaTehing.next(myygiHindKokku);
    this.kogus.next(kogusKokku);
  }
}
