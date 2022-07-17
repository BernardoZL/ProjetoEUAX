import { Component, OnInit } from '@angular/core';
import { Produto } from '../loja/models/produto.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  public produtos: Array<Produto> = []

  constructor() { }

  ngOnInit(): void {
    this.getProdutos()
  }

  public getProdutos(){
    let stringCarrinhoAtual = '' + sessionStorage.getItem("carrinho");
    let carrinhoAtual = [];

    if(JSON.parse(stringCarrinhoAtual)){
      carrinhoAtual = JSON.parse(stringCarrinhoAtual);
      this.produtos = carrinhoAtual
    }
  }

  public limparCarrinho(){
    sessionStorage.removeItem("carrinho");
    this.produtos = [];
  }

}
