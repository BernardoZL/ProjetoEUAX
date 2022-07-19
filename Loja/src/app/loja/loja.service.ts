import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Categoria } from "./models/categoria.model";
import { Produto } from "./models/produto.model";

@Injectable({
    providedIn: "root"
})

export class LojaService {

    CategoriaBaseUrl = `${environment.baseUrl}api/categoria`
    ProdutoBaseUrl = `${environment.baseUrl}api/produto`
    constructor(private  http: HttpClient){}

    getAllCategorias(): Observable<Categoria[]>{
        return this.http.get<Categoria[]>(`${this.CategoriaBaseUrl}`);
    }

    getProdutos(): Observable<Produto[]>{
        return this.http.get<Produto[]>(`${this.ProdutoBaseUrl}`);
    }

    getProdutosByCategoria(idCategoria?: number): Observable<Produto[]>{
        return this.http.get<Produto[]>(`${this.ProdutoBaseUrl}/categoria/${idCategoria}`);
    }

    cadastrarProduto(produto: Produto){
        return this.http.post(`${this.ProdutoBaseUrl}`, produto)
    }

    atualizarProduto(produto: Produto){
        return this.http.put(`${this.ProdutoBaseUrl}/${produto.id}`, produto)
    }

    deletarProduto(idProduto?: number){
        return this.http.delete(`${this.ProdutoBaseUrl}/${idProduto}`)
    }

    cadastrarCategoria(categoria: Categoria){
        return this.http.post(`${this.CategoriaBaseUrl}`, categoria)
    }

    atualizarCategoria(categoria: Categoria){
        return this.http.put(`${this.CategoriaBaseUrl}/${categoria.id}`, categoria)
    }

    deletarCategoria(idCategoria?: number){
        return this.http.delete(`${this.CategoriaBaseUrl}/${idCategoria}`)
    }
}

