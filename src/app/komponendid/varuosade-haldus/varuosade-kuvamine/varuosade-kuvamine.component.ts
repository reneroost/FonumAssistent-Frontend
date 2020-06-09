import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Varuosa } from 'src/app/mudel/varuosa';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Esindus } from 'src/app/mudel/esindus';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-varuosade-kuvamine',
  templateUrl: './varuosade-kuvamine.component.html',
  styleUrls: ['./varuosade-kuvamine.component.css']
})
export class VaruosadeKuvamineComponent implements OnInit {
  
  varuosad: Varuosa[];
  esindused: Esindus[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.saaVaruosad();
    this.saaEsindused();
  }

  saaVaruosad() {
    this.http
      .get<{ [key: string]: Varuosa }>('http://localhost:8080/varuosad')
      .pipe(map(vastuseAndmed => {
        const varuosadeList: Varuosa[] = [];
        for (const key in vastuseAndmed) {
          if (vastuseAndmed.hasOwnProperty(key)) {
            varuosadeList.push({ ...vastuseAndmed[key], id: key });
          }
        }
        return varuosadeList;
      })).subscribe(andmed => {
        this.varuosad = andmed;
      });
  }

  saaEsindused() {
    this.http
      .get<{ [key: string]: Esindus }>('http://localhost:8080/esindused')
      .pipe(map(vastuseAndmed => {
        const esindusteList: Esindus[] = [];
        for (const key in vastuseAndmed) {
          if (vastuseAndmed.hasOwnProperty(key)) {
            esindusteList.push({ ...vastuseAndmed[key], id: key });
          }
        }
        return esindusteList;
      })).subscribe(andmed => {
        this.esindused = andmed;
      });
  }

}
