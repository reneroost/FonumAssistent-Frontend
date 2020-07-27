import { Component, OnInit } from '@angular/core';
import { TehtudToodeKogus } from 'src/app/mudel/tehtud-toode-kogus';
import { VaruosadEnimkulunudService } from 'src/app/teenused/varuosad-enimkulunud.service';

@Component({
  selector: 'app-enimkulunud-varuosad',
  templateUrl: './enimkulunud-varuosad.component.html',
  styleUrls: ['./enimkulunud-varuosad.component.css']
})
export class EnimkulunudVaruosadComponent implements OnInit {

  tehtudToodeKogused: TehtudToodeKogus[];
  periood: number = 6;
  algusKp: string;
  minKogus: number = 3;
  constructor(private varuosadEnimkulunudTeenus: VaruosadEnimkulunudService) { }

  ngOnInit(): void {
    this.saaEnimkulunudVaruosad();
  }

  saaEnimkulunudVaruosad() {
    this.varuosadEnimkulunudTeenus.tombaEnimkulunudVaruosad(this.periood, this.minKogus).subscribe( andmed => {
      this.tehtudToodeKogused = andmed;
    });
  }

  muudaPerioodi(event) {
    this.periood = Number(event.target.value);
    this.saaEnimkulunudVaruosad();
  }

  suurendaPerioodi() {
    if (this.periood < 24) {
      this.periood++;
    }
    this.saaEnimkulunudVaruosad();
  }

  vahendaPerioodi() {
    if (this.periood > 1) {
      this.periood--;
    }
    this.saaEnimkulunudVaruosad();
  }

  muudaMinKogust(event) {
    this.minKogus = Number(event.target.value);
    this.saaEnimkulunudVaruosad();
  }

  suurendaMinKogust() {
    if (this.minKogus < 24) {
      this.minKogus++;
    }
    this.saaEnimkulunudVaruosad();
  }

  vahendaMinKogust() {
    if (this.minKogus > 1) {
      this.minKogus--;
    }
    this.saaEnimkulunudVaruosad();
  }
}
