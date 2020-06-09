import { Component, OnInit } from '@angular/core';
import { Varuosa } from 'src/app/mudel/varuosa';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-varuosa-lisamine',
  templateUrl: './varuosa-lisamine.component.html',
  styleUrls: ['./varuosa-lisamine.component.css']
})
export class VaruosaLisamineComponent implements OnInit {
  varuosad: Varuosa[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  
  onLooUusVaruosaArtikkel(varuosaAndmed: Varuosa) {
    this.http
      .post(
        'http://localhost:8080/lisaVaruosa', 
        varuosaAndmed
      )
      .subscribe(vastuseAndmed => {
        // console.log(vastuseAndmed);
      });
  }
}
