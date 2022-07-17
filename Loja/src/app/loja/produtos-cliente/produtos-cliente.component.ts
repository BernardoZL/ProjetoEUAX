import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-produtos-cliente',
  templateUrl: './produtos-cliente.component.html',
  styleUrls: ['./produtos-cliente.component.css']
})
export class ProdutosClienteComponent implements OnInit {

  @Input() categoria? : Categoria

  public produtos: Array<Produto> = [
    {id: 1, nome: "Batata", preco:"500", imagem: ""},
    {id: 2, nome: "Açucar", preco:"100", imagem: ""},
    {id: 3, nome: "Pimenta", preco:"200", imagem: ""},
    {id: 4, nome: "Chocolate", preco:"800", imagem: ""},
    {id: 5, nome: "Arroz", preco:"50", imagem: ""},
    {id: 6, nome: "Amendoim", preco:"600", imagem: ""},
    {id: 7, nome: "Carne", preco:"300", imagem: ""}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public salvarNoCarrinho(idProduto: Number){
    
    let stringCarrinhoAtual = '' + sessionStorage.getItem("carrinho");
    let carrinhoAtual = [];

    if(JSON.parse(stringCarrinhoAtual)){
      carrinhoAtual = JSON.parse(stringCarrinhoAtual);
    }

    carrinhoAtual.push(idProduto);
    sessionStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
  }

}
