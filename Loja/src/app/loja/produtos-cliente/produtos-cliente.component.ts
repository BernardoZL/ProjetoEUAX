import { Component, Input, OnInit } from '@angular/core';
import { LojaService } from '../loja.service';
import { Categoria } from '../models/categoria.model';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-produtos-cliente',
  templateUrl: './produtos-cliente.component.html',
  styleUrls: ['./produtos-cliente.component.css']
})
export class ProdutosClienteComponent implements OnInit {

  @Input() set categoria(categoria : Categoria) {
    if(categoria){
      this.carregarProdutos(categoria)
    }
  }

  public produtos!: Produto[];

  constructor
  (
    private lojaService: LojaService
  ) 
  {

  }

  ngOnInit(): void {
  }

  public carregarProdutos(categ: Categoria){
    this.lojaService.getProdutosByCategoria(categ.id).subscribe({
      next: (retorno: Produto[]) => this.produtos = retorno,
      error: (erro) => console.log(erro)
    });
  }

  public salvarNoCarrinho(idProduto: Number){
    
    let stringCarrinhoAtual = '' + sessionStorage.getItem("carrinho");
    let carrinhoAtual = [];

    if(JSON.parse(stringCarrinhoAtual)){
      carrinhoAtual = JSON.parse(stringCarrinhoAtual);
    }

    if(!carrinhoAtual.includes(idProduto)){
      carrinhoAtual.push(idProduto);
    }
    
    sessionStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
  }

}
