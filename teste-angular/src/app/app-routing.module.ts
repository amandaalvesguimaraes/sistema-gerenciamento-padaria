import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { PaginaCadastroComponent } from './pagina-cadastro/pagina-cadastro.component';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { CrudinicialComponent } from './crudinicial/crudinicial.component';
import { VencimentoProdutosComponent } from './vencimento-produtos/vencimento-produtos.component';
import { PaginaRegistroVendasComponent } from './pagina-registro-vendas/pagina-registro-vendas.component';
import { EntradasaidaService } from './services/entradasaida.service';
import { RegistroEntradaSaidaComponent } from './registro-entrada-saida/registro-entrada-saida.component';

const routes: Routes = [
  { path: '', component: PaginaLoginComponent },
  { path: 'cadastro', component: PaginaCadastroComponent },
  { path: 'home', component: PaginaHomeComponent },
  { path: 'crud', component: CrudinicialComponent},
  { path: 'vencimento', component : VencimentoProdutosComponent},
  { path: 'vendas', component : PaginaRegistroVendasComponent},
  { path: 'entradasaida', component: RegistroEntradaSaidaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
