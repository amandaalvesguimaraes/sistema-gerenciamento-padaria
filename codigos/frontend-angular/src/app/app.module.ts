import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudinicialComponent } from './crudinicial/crudinicial.component';
import { CrudcadastroComponent } from './crudcadastro/crudcadastro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VencimentoProdutosComponent } from './vencimento-produtos/vencimento-produtos.component';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    CrudinicialComponent,
    CrudcadastroComponent,
    VencimentoProdutosComponent
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
