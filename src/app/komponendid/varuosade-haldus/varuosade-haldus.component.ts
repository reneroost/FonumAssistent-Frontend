import { Component, OnInit } from '@angular/core';
import { Varuosa } from 'src/app/mudel/varuosa';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-varuosade-haldus',
  templateUrl: './varuosade-haldus.component.html',
  styleUrls: ['./varuosade-haldus.component.css']
})
export class VaruosadeHaldusComponent implements OnInit {

  constructor(private http: HttpClient,
    private marsruut: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
