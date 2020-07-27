import { Component, OnInit, Input } from '@angular/core';
import { VaruosaJaotus } from 'src/app/mudel/varuosa-jaotus';
import { VaruosaJaotamineService } from 'src/app/teenused/varuosa-jaotamine.service';
import { Varuosa } from 'src/app/mudel/varuosa';
import { VaruosaService } from 'src/app/teenused/varuosa.service';


@Component({
  selector: 'app-ymber-jaotamine',
  templateUrl: './ymber-jaotamine.component.html',
  styleUrls: ['./ymber-jaotamine.component.css']
})
export class YmberJaotamineComponent implements OnInit {

  varuosaJaotused: VaruosaJaotus[];
  varuosa: Varuosa;
  varuosadeHulk: number;
  valikuId = 3;

  valikud = [
    { id: 3, nimi: "Kõik"},
    { id: 0, nimi: "Kristiine" },
    { id: 1, nimi: "Viru" },
    { id: 2, nimi: "Lõunakeskus" }
  ]

  constructor(private varuosaJaotusTeenus: VaruosaJaotamineService,
    private varuosaTeenus: VaruosaService) { }

  ngOnInit(): void {
    this.tombaVaruosad(3);
  }

  tombaVaruosad(value: number) {
    this.valikuId = value;
    this.varuosaJaotusTeenus.tombaVaruosaJaotusedEsinduseKohta(value).subscribe(varuosaJaotused => {
      this.varuosaJaotused = varuosaJaotused;
      this.varuosadeHulk = this.varuosaJaotused.length;
    })
    return this.varuosaJaotused;
  }

  saadaVaruosa(juhis: VaruosaJaotus) {
    this.varuosaTeenus.getVaruosa(juhis.varuosaId).subscribe(andmed => {
      this.varuosa = andmed;
      this.varuosa.id = juhis.varuosaId;
      this.varuosa.kogusKristiineKeskuses = juhis.kogusKristiineKeskuses;
      this.varuosa.kogusViruKeskuses = juhis.kogusViruKeskuses;
      this.varuosa.kogusLounaKeskuses = juhis.kogusLounaKeskuses;
      this.varuosaTeenus.muudaVaruosa(this.varuosa).subscribe( andmed => {
        this.varuosaJaotusTeenus.tombaVaruosaJaotusedEsinduseKohta(this.valikuId).subscribe(varuosaJaotused => {
          this.varuosaJaotused = varuosaJaotused;
          this.varuosadeHulk = this.varuosaJaotused.length;
        });
      }
      );
    });
  }
}
