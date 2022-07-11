import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProfissionaisComponent } from './lista-profissionais/lista-profissionais.component';
import { NovoProfissionalComponent } from './novo-profissional/novo-profissional.component';
import { ProfisisonaisComponent } from './profisisonais.component';

const routes: Routes = [
  {
    path: '',
    component: ProfisisonaisComponent,
    children: [
      {
        path: '',
        component: ListaProfissionaisComponent
      },
      {
        path: 'novo-profissional',
        component: NovoProfissionalComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfisisonaisRoutingModule { }
