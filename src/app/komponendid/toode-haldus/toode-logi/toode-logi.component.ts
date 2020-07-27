import { Component, OnInit } from '@angular/core';
import { TehtudTooLogiService } from 'src/app/teenused/tehtud-too-logi.service';
import { TehtudTooLogi } from 'src/app/mudel/tehtud-too-logi';

@Component({
  selector: 'app-toode-logi',
  templateUrl: './toode-logi.component.html',
  styleUrls: ['./toode-logi.component.css']
})
export class ToodeLogiComponent implements OnInit {

  tehtudToodeLogid: TehtudTooLogi[] = [];

  constructor(private tehtudTooLogiTeenus: TehtudTooLogiService) { }

  ngOnInit(): void {
    this.tombaTehtudToodeLogid();
  }

  tombaTehtudToodeLogid() {
    this.tehtudTooLogiTeenus.tombaTehtudToodeLogid().subscribe( andmed => {
      this.tehtudToodeLogid = andmed;
    });
  }

}
