import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudinicialComponent } from './crudinicial/crudinicial.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VencimentoProdutosComponent } from './vencimento-produtos/vencimento-produtos.component';
import { DatePipe } from '@angular/common';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { PaginaCadastroComponent } from './pagina-cadastro/pagina-cadastro.component';



@NgModule({
  declarations: [
    AppComponent,
    CrudinicialComponent,
    VencimentoProdutosComponent,
    PaginaLoginComponent,
    PaginaHomeComponent,
    PaginaCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
