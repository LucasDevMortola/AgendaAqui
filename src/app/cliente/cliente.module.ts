import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    ClienteComponent,
    ListaClienteComponent,
    NovoClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    MatRippleModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ClienteModule { }
