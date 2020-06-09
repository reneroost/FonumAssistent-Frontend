import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Esindus } from 'src/app/mudel/esindus';

@Component({
  selector: 'app-seaded',
  templateUrl: './seaded.component.html',
  styleUrls: ['./seaded.component.css']
})
export class SeadedComponent implements OnInit {

  esindused: Esindus[];

  constructor(private marsruut: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
