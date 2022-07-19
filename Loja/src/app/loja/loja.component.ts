import { Component, OnInit } from '@angular/core';
import { LojaService } from './loja.service';
import { Categoria } from './models/categoria.model';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  public categoriaSelecionada?: Categoria

  public categorias!: Categoria[];

  public nomeCategoria!: String;

  constructor(private lojaService: LojaService) { }

  ngOnInit(): void {
    this.carregarCategorias();
  }

  public carregarCategorias(){
    this.lojaService.getAllCategorias().subscribe({
      next: (retorno: Categoria[]) => this.categorias = retorno,
      error: (erro) => console.log(erro)
    });
  }

  public setSelecao(categoria: Categoria){
    this.categoriaSelecionada = categoria;
    this.nomeCategoria = categoria.nome;
  }

  public getIsLogged(): boolean{
    let logingInfo = sessionStorage.getItem("login");

    if(logingInfo){
      return true;
    }
    return false;
  }

  public cadastrar(){
    if(!this.nomeCategoria){return}

    this.lojaService.cadastrarCategoria({nome: this.nomeCategoria}).subscribe({
      next: (retorno) => {console.log(retorno)},
      error: (erro) => console.log(erro)
    }).add(() => {this.categoriaSelecionada = undefined; this.carregarCategorias(); this.nomeCategoria = ""})

  }

  public atualizar(){
    if(!this.categoriaSelecionada){return}

    this.lojaService.atualizarCategoria({id: this.categoriaSelecionada?.id, nome: this.nomeCategoria}).subscribe({
      next: (retorno) => {console.log(retorno)},
      error: (erro) => {console.log(erro)}
    }).add(() => {this.categoriaSelecionada = undefined; this.carregarCategorias(); this.nomeCategoria = ""})
  }

  public excluir(){
    if(!this.categoriaSelecionada){return}

    this.lojaService.deletarCategoria(this.categoriaSelecionada?.id).subscribe({
      next: (retorno) => {

      },
      error: (erro) => {console.log(erro)}
    }).add(() => {this.categoriaSelecionada = undefined; this.carregarCategorias(); this.nomeCategoria = ""})
  }
}
