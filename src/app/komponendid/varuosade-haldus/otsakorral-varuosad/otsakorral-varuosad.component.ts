import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Varuosa } from 'src/app/mudel/varuosa';
import { map } from 'rxjs/operators';
import { YksikVaartused } from 'src/app/mudel/yksik-vaartused';
import { Esindus } from 'src/app/mudel/esindus';

@Component({
  selector: 'app-otsakorral-varuosad',
  templateUrl: './otsakorral-varuosad.component.html',
  styleUrls: ['./otsakorral-varuosad.component.css']
})
export class OtsakorralVaruosadComponent implements OnInit {

  kriitiliseltOtsakorralVaruosad: Varuosa[];
  leebeltOtsakorralVaruosad: Varuosa[];
  yksikVaartused: YksikVaartused[];
  esindused: Esindus[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.saaKriitiliseltOtsakorralVaruosad();
    this.saaLeebeltOtsakorralVaruosad();
    this.saaYksikVaartused();
    this.saaEsindused();
  }

  saaKriitiliseltOtsakorralVaruosad() {
    this.http
    .get<{[key: string]: Varuosa}>('http://localhost:8080/saaKriitiliseltOtsakorralVaruosad')
    .pipe(map(vastuseAndmed => {
      const varuosadeList: Varuosa[] = [];
      for(const key in vastuseAndmed) {
        if (vastuseAndmed.hasOwnProperty(key)) {
          varuosadeList.push({ ...vastuseAndmed[key], id: key});
        }
      }
      return varuosadeList;
    })).subscribe(andmed => {
      this.kriitiliseltOtsakorralVaruosad = andmed;
    });
  }

  saaLeebeltOtsakorralVaruosad() {
    this.http
    .get<{[key: string]: Varuosa}>('http://localhost:8080/saaLeebeltOtsakorralVaruosad')
    .pipe(map(vastuseAndmed => {
      const varuosadeList: Varuosa[] = [];
      for(const key in vastuseAndmed) {
        if (vastuseAndmed.hasOwnProperty(key)) {
          varuosadeList.push({ ...vastuseAndmed[key], id: key});
        }
      }
      return varuosadeList;
    })).subscribe(andmed => {
      this.leebeltOtsakorralVaruosad = andmed;
    });
  }

  saaYksikVaartused() {
    this.http
    .get<{[key: string]: YksikVaartused}>('http://localhost:8080/yksikvaartused')
    .pipe(map(vastuseAndmed => {
      const yksikVaartusedList: YksikVaartused[] = [];
      for(const key in vastuseAndmed) {
        if (vastuseAndmed.hasOwnProperty(key)) {
          yksikVaartusedList.push({ ...vastuseAndmed[key], id: key});
        }
      }
      return yksikVaartusedList;
    })).subscribe(andmed => {
      this.yksikVaartused = andmed;
    });
  }

  saaEsindused() {
    this.http
    .get<{[key: string]: Esindus}>('http://localhost:8080/esindused')
    .pipe(map(vastuseAndmed => {
      const esindusteList: Esindus[] = [];
      for (const key in vastuseAndmed) {
        if (vastuseAndmed.hasOwnProperty(key)) {
          esindusteList.push({ ...vastuseAndmed[key], id: key});
        }
      }
      return esindusteList;
    })).subscribe(andmed => {
      this.esindused = andmed;
    });
  }

}
