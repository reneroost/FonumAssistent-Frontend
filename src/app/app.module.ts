import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SeadedComponent } from './komponendid/seaded/seaded.component';
import { VaruosadeHaldusComponent } from './komponendid/varuosade-haldus/varuosade-haldus.component';
import { VaruosaLisamineComponent } from './komponendid/varuosade-haldus/varuosa-lisamine/varuosa-lisamine.component';
import { EsindusedComponent } from './komponendid/seaded/esindused/esindused.component';
import { MuudSeadedComponent } from './komponendid/seaded/muud-seaded/muud-seaded.component';
import { OtsakorralVaruosadComponent } from './komponendid/varuosade-haldus/otsakorral-varuosad/otsakorral-varuosad.component';
import { YmberJaotamineComponent } from './komponendid/varuosade-haldus/ymber-jaotamine/ymber-jaotamine.component';
import { VaruosaService } from './teenused/varuosa.service';
import { ToodeHaldusComponent } from './komponendid/toode-haldus/toode-haldus.component';
import { ToodeLogiComponent } from './komponendid/toode-haldus/toode-logi/toode-logi.component';
import { TooRegistreerimineComponent } from './komponendid/toode-haldus/too-registreerimine/too-registreerimine.component';
import { KorvOlekComponent } from './komponendid/toode-haldus/korv-olek/korv-olek.component';
import { KorvDetailidComponent } from './komponendid/toode-haldus/korv-detailid/korv-detailid.component';
import { VaruosadeKuvamineComponent } from './komponendid/varuosade-haldus/varuosade-kuvamine/varuosade-kuvamine.component';
import { HinnaLangetusComponent } from './komponendid/varuosade-haldus/hinna-langetus/hinna-langetus.component';
import { EnimkulunudVaruosadComponent } from './komponendid/varuosade-haldus/enimkulunud-varuosad/enimkulunud-varuosad.component';

const marsruudid: Routes = [
  {
    path: 'varuosade-haldus',
    component: VaruosadeHaldusComponent, children: [
      {
        path: 'kuva-varuosad',
        component: VaruosadeKuvamineComponent
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
        path: 'hinna-langetus',
        component: HinnaLangetusComponent
      },
      {
        path: 'enimkulunud-varuosad',
        component: EnimkulunudVaruosadComponent
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
    path: 'toode-haldus',
    component: ToodeHaldusComponent, children: [
      {
        path: 'too-registreerimine',
        component: TooRegistreerimineComponent
      },
      {
        path: 'korv-detailid',
        component: KorvDetailidComponent
      },
      {
        path: 'toode-logi',
        component: ToodeLogiComponent
      },
      {
        path: '', 
        redirectTo: 'too-registreerimine', 
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
    VaruosadeHaldusComponent,
    SeadedComponent,
    VaruosaLisamineComponent,
    EsindusedComponent,
    MuudSeadedComponent,
    OtsakorralVaruosadComponent,
    YmberJaotamineComponent,
    VaruosadeKuvamineComponent,
    ToodeHaldusComponent,
    ToodeLogiComponent,
    TooRegistreerimineComponent,
    KorvOlekComponent,
    KorvDetailidComponent,
    HinnaLangetusComponent,
    EnimkulunudVaruosadComponent,
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
    VaruosaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
