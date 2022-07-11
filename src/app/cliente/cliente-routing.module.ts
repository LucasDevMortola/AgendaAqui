import { ClienteComponent } from "./cliente.component";
import { NovoClienteComponent } from "./novo-cliente/novo-cliente.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaClienteComponent } from "./lista-cliente/lista-cliente.component";
const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    children: [
      {
        path: '',
        component: ListaClienteComponent,
      },
      {
        path: 'novo-cliente',
        component: NovoClienteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
