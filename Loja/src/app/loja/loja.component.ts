import { Component, OnInit } from '@angular/core';
import { Categoria } from './models/categoria.model';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  public categoriaSelecionada?: Categoria

  public categorias: Array<Categoria> = [
    {id: 1, nome: "Celulares"},
    {id: 2, nome: "Computadores"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public setSelecao(categoria: Categoria){
    this.categoriaSelecionada = categoria;
  }

  public getIsLogged(): boolean{
    let logingInfo = sessionStorage.getItem("login");

    if(logingInfo){
      return true;
    }
    return false;
  }
}
