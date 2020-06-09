import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AvalehtComponent } from './komponendid/avaleht/avaleht.component';
import { TooRegistreerimineComponent } from './komponendid/too-registreerimine/too-registreerimine.component';
import { SeadedComponent } from './komponendid/seaded/seaded.component';
import { VaruosadeHaldusComponent } from './komponendid/varuosade-haldus/varuosade-haldus.component';
import { VaruosaLisamineComponent } from './komponendid/varuosade-haldus/varuosa-lisamine/varuosa-lisamine.component';
import { VaruosadeKuvamineComponent } from './komponendid/varuosade-haldus/varuosade-kuvamine/varuosade-kuvamine.component';
import { EsindusedComponent } from './komponendid/seaded/esindused/esindused.component';
import { MuudSeadedComponent } from './komponendid/seaded/muud-seaded/muud-seaded.component';
import { OtsakorralVaruosadComponent } from './komponendid/varuosade-haldus/otsakorral-varuosad/otsakorral-varuosad.component';
import { YmberJaotamineComponent } from './komponendid/varuosade-haldus/ymber-jaotamine/ymber-jaotamine.component';
import { VaruosadeKuvamine2Component } from './komponendid/varuosade-haldus/varuosade-kuvamine2/varuosade-kuvamine2.component';
import { VaruosaService2 } from './teenused/varuosa2.service';

const marsruudid: Routes = [
  { path: 'avaleht', component: AvalehtComponent },
  { path: 'too-registreerimine', component: TooRegistreerimineComponent },
  // { path: 'seaded', component: SeadedComponent },
  {
    path: 'varuosade-haldus',
    component: VaruosadeHaldusComponent, children: [
      {
        path: 'kuva-varuosad',
        component: VaruosadeKuvamineComponent
      },
      {
        path: 'kuva-varuosad2',
        component: VaruosadeKuvamine2Component
      },
      {
        path: 'otsakorral-varuosad',
        component: OtsakorralVaruosadComponent
      },
      {
        path: 'ymber-jaotamine',
        component: YmberJaotamineComponent
      },
      {
        path: 'lisa-varuosa',
        component: VaruosaLisamineComponent
      },
      {
        path: '', 
        redirectTo: 'kuva-varuosad', 
        pathMatch: 'full'
      }
    ]
  },
  { 
    path: 'seaded',
    component: SeadedComponent, children: [
      {
        path: 'esindused',
        component: EsindusedComponent
      },
      {
        path: 'muud-seaded',
        component: MuudSeadedComponent
      },
      {
        path: '',
        redirectTo: 'esindused',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AvalehtComponent,
    VaruosadeHaldusComponent,
    TooRegistreerimineComponent,
    SeadedComponent,
    VaruosaLisamineComponent,
    VaruosadeKuvamineComponent,
    EsindusedComponent,
    MuudSeadedComponent,
    OtsakorralVaruosadComponent,
    YmberJaotamineComponent,
    VaruosadeKuvamine2Component,
  ],
  imports: [
    RouterModule.forRoot(marsruudid),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    VaruosaService2
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
