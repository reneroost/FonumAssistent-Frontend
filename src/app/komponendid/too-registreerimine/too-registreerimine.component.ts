import { Component, OnInit } from '@angular/core';
import { Varuosa } from 'src/app/mudel/varuosa';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-too-registreerimine',
  templateUrl: './too-registreerimine.component.html',
  styleUrls: ['./too-registreerimine.component.css']
})
export class TooRegistreerimineComponent implements OnInit {

  constructor(private marsruut: ActivatedRoute) { }

  ngOnInit(): void {
  }


}
