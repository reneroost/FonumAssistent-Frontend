import { Component, OnInit } from '@angular/core';
import { KorvService } from 'src/app/teenused/korv.service';

@Component({
  selector: 'app-korv-olek',
  templateUrl: './korv-olek.component.html',
  styleUrls: ['./korv-olek.component.css']
})
export class KorvOlekComponent implements OnInit {

  summa: number = 0.00;
  kogus: number = 0;

  constructor(private korvTeenus: KorvService) { }

  ngOnInit(): void {
    this.uuendaKorviOlekut();
  }

  uuendaKorviOlekut() {
    this.korvTeenus.summaTehing.subscribe(
      vastus => this.summa = vastus
    );
    this.korvTeenus.kogus.subscribe(
      vastus => this.kogus = vastus
    );

  }

}
