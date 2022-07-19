import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LojaComponent } from './loja/loja.component';
import { NavComponent } from './nav/nav.component';
import { ProdutosClienteComponent } from './loja/produtos-cliente/produtos-cliente.component';
import { ProdutosAdminComponent } from './loja/produtos-admin/produtos-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    LojaComponent,
    NavComponent,
    ProdutosClienteComponent,
    ProdutosAdminComponent,
    LoginComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
