export class YksikVaartused {
    id: string;
    piirLeebe: number;
    piirKriitiline: number;
    piirVanus: number;

    constructor(piirLeebe: number, piirKriitiline: number) {
        this.id = 'X';
        this.piirLeebe = piirLeebe;
        this.piirKriitiline = piirKriitiline;
    }
}
