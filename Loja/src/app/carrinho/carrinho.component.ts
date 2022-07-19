import { Component, OnInit } from '@angular/core';
import { LojaService } from '../loja/loja.service';
import { Produto } from '../loja/models/produto.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  public produtosNoCarrinho: Array<number> = [];
  public produtos: Array<Produto> = [];

  constructor
  (
    private lojaService : LojaService
  )
  { 

  }

  ngOnInit(): void {
    this.getProdutosNoCarrinho()
  }

  public getProdutosNoCarrinho(){
    let stringCarrinhoAtual = '' + sessionStorage.getItem("carrinho");
    let carrinhoAtual = [];

    if(JSON.parse(stringCarrinhoAtual)){
      carrinhoAtual = JSON.parse(stringCarrinhoAtual);
      this.produtosNoCarrinho = carrinhoAtual;
      this.lojaService.getProdutos().subscribe({
        next: (retorno: Produto[]) => this.produtos = retorno.filter(p => this.produtosNoCarrinho.includes(p.id)),
        error: (erro) => console.log(erro)
      })
    }
  }

  public limparCarrinho(){
    sessionStorage.removeItem("carrinho");
    this.produtos = [];
  }

}
