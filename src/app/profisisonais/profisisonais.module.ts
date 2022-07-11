import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfisisonaisRoutingModule } from './profisisonais-routing.module';
import { ProfisisonaisComponent } from './profisisonais.component';
import { ListaProfissionaisComponent } from './lista-profissionais/lista-profissionais.component';
import { NovoProfissionalComponent } from './novo-profissional/novo-profissional.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProfisisonaisComponent,
    ListaProfissionaisComponent,
    NovoProfissionalComponent
  ],
  imports: [
    CommonModule,
    ProfisisonaisRoutingModule,
    RouterModule
  ]
})
export class ProfisisonaisModule { }
