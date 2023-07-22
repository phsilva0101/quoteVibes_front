import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPensamentoComponent } from './components/pensamentos/cadastro-pensamento/cadastro-pensamento.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';

const routes: Routes = [
  {
    path: 'criar-pensamento',
    component: CadastroPensamentoComponent,
  },

  {
    path: 'listar-pensamento',
    component: ListarPensamentosComponent,
  },

  {
    path: 'editar-pensamento/:id',
    component: CadastroPensamentoComponent,
  },

  {
    path: '',
    redirectTo: 'listar-pensamento',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
