import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-cliente',
    pathMatch: 'full'
  },
  {
    path:'lista-cliente',
    component:ListaClienteComponent
  },
  {
    path:'novo-cliente',
    component: NovoClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
