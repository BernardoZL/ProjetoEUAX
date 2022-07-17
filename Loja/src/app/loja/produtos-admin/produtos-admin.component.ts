import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Categoria } from '../models/categoria.model';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-produtos-admin',
  templateUrl: './produtos-admin.component.html',
  styleUrls: ['./produtos-admin.component.css']
})
export class ProdutosAdminComponent implements OnInit {

  @Input() categoria? : Categoria;

  public produtoSelecionado? : Produto;
  public estaCadastrando: boolean = false;

  public produtoForm! : FormGroup;

  public produtos: Array<Produto> = [
    {id: 1, nome: "Batata", preco:"500", imagem: ""},
    {id: 2, nome: "Açucar", preco:"100", imagem: ""},
    {id: 3, nome: "Pimenta", preco:"200", imagem: ""},
    {id: 4, nome: "Chocolate", preco:"800", imagem: ""},
    {id: 5, nome: "Arroz", preco:"50", imagem: ""},
    {id: 6, nome: "Amendoim", preco:"600", imagem: ""},
    {id: 7, nome: "Carne", preco:"300", imagem: ""}
  ]

  constructor(private fb: FormBuilder) { 
    this.inicializarForm()
  }

  ngOnInit(): void {
  }

  inicializarForm(){
    this.produtoForm = this.fb.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required]
    });
  }

  public selecionarProduto(produto?: Produto){
    this.produtoSelecionado = produto;
    if(produto){
      this.produtoForm.patchValue(produto)
    }else{
      this.inicializarForm()
    }
  }

  public iniciarCadastro(){
    this.produtoSelecionado = {id: 0, nome: "", preco: "", imagem: ""}
    this.estaCadastrando = true;
  }

}
