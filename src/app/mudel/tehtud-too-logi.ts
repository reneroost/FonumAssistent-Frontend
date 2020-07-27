import { KorvArtikkel } from './korv-artikkel';
import * as moment from 'moment';

export class TehtudTooLogi {
    id: number;
    tootja: string;
    mudel: string;
    varuosaLiik: string;
    varuosaLiikTeenus: string;
    artikliHind: number;
    teenuseHind: number;
    kogus: number;
    tehtudTooKpKell: string;

    constructor(korvArtikkel: KorvArtikkel) {
        this.id = korvArtikkel.varuosaId;
        this.tootja = korvArtikkel.tootja;
        this.mudel = korvArtikkel.mudel;
        this.varuosaLiik = korvArtikkel.varuosaLiik;
        this.varuosaLiikTeenus = korvArtikkel.varuosaLiikTeenus;
        this.artikliHind = korvArtikkel.artikliHind;
        this.teenuseHind = korvArtikkel.teenuseHind;
        this.kogus = korvArtikkel.kogus;
        this.tehtudTooKpKell = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
