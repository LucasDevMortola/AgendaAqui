import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfisisonaisRoutingModule } from './profisisonais-routing.module';
import { ProfisisonaisComponent } from './profisisonais.component';
import { ListaProfissionaisComponent } from './lista-profissionais/lista-profissionais.component';
import { NovoProfissionalComponent } from './novo-profissional/novo-profissional.component';

import { RouterModule } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    ProfisisonaisComponent,
    ListaProfissionaisComponent,
    NovoProfissionalComponent
  ],
  imports: [
    CommonModule,
    ProfisisonaisRoutingModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class ProfisisonaisModule { }
