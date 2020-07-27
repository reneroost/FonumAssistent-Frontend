import { Varuosa } from './varuosa';

export class KorvArtikkel {
    varuosaId: number;
    tootja: string;
    mudel: string;
    varuosaLiik: string;
    varuosaLiikTeenus: string;
    artikliHind: number;
    teenuseHind: number;
    maxKogus: number;
    kogusKristiineKeskuses: number;
    kogusViruKeskuses: number;
    kogusLounaKeskuses: number;
    valitudEsindus: number;

    kogus: number;
    vaheSumma: number;

    constructor(varuosa: Varuosa, valitudEsindus: number) {
        this.varuosaId = varuosa.id;
        this.tootja = varuosa.tootja;
        this.mudel = varuosa.mudel;
        this.varuosaLiik = varuosa.varuosaLiik;
        this.varuosaLiikTeenus = varuosa.varuosaLiikTeenus;
        this.artikliHind = varuosa.artikliHind;
        this.teenuseHind = varuosa.teenuseHind;
        if (valitudEsindus == 0) {
            this.maxKogus = varuosa.kogusKristiineKeskuses;
        } else if (valitudEsindus == 1) {
            this.maxKogus = varuosa.kogusViruKeskuses;
        } else if (valitudEsindus == 2) {
            this.maxKogus = varuosa.kogusLounaKeskuses;
        }
        this.valitudEsindus = valitudEsindus;

        this.kogus = 1;
        this.vaheSumma = this.teenuseHind * this.kogus;
    }
}
