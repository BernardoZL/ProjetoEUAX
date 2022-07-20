import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LojaService } from '../loja.service';
import { Categoria } from '../models/categoria.model';
import { Produto } from '../models/produto.model';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-produtos-admin',
  templateUrl: './produtos-admin.component.html',
  styleUrls: ['./produtos-admin.component.css']
})
export class ProdutosAdminComponent implements OnInit {

  public myimage!: String;

  private _categoria!: Categoria;
  @Input() set categoria(categoria : Categoria) {
    this._categoria = categoria;
    if(categoria){
      this.carregarProdutos(categoria)
    }
  }
  get categoria(): Categoria{
    return this._categoria;
  }

  public produtoSelecionado? : Produto;
  public estaCadastrando: boolean = false;

  public produtoForm! : FormGroup;

  public produtos!: Produto[];


  constructor
  (
    private fb: FormBuilder,
    private lojaService: LojaService
  ) 
  { 
    this.inicializarForm()
  }

  ngOnInit(): void {
  }

  public carregarProdutos(categ: Categoria){
    this.lojaService.getProdutosByCategoria(categ.id).subscribe({
      next: (retorno: Produto[]) => this.produtos = retorno,
      error: (erro) => console.log(erro)
    });
  }

  inicializarForm(){
    this.produtoForm = this.fb.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      imagem: [''],
      idCategoria: [0]
    });
  }

  public selecionarProduto(produto?: Produto){
    this.produtoSelecionado = produto;
    if(produto){
      this.produtoForm.patchValue(produto);
      this.myimage = produto.imagem;
    }else{
      this.inicializarForm()
    }
  }

  public iniciarCadastro(){
    this.selecionarProduto({id: 0, nome: "", preco: "", imagem: "", idCategoria: this.categoria.id});
    this.estaCadastrando = true;
  }

  public cadastrar(){
    if(!this.produtoForm.valid){return};

    this.lojaService.cadastrarProduto(this.produtoForm.value).subscribe({
      next: (retorno) => {this.estaCadastrando = false;},
      error: (erro) => console.log(erro)
    }).add(() => {this.selecionarProduto(undefined); this.carregarProdutos(this.categoria); this.myimage = ""})

  }

  public atualizar(){
    if(!this.produtoForm.valid){return};
    
    this.produtoForm.value.id = this.produtoSelecionado?.id;
    this.lojaService.atualizarProduto(this.produtoForm.value).subscribe({
      next: (retorno) => {console.log(retorno)},
      error: (erro) => {console.log(erro)}
    }).add(() => {this.selecionarProduto(undefined); this.carregarProdutos(this.categoria); this.myimage = ""})
  }

  public excluir(){
    this.lojaService.deletarProduto(this.produtoSelecionado?.id).subscribe({
      next: (retorno) => {

      },
      error: (erro) => {console.log(erro)}
    }).add(() => {this.selecionarProduto(undefined); this.carregarProdutos(this.categoria); this.myimage = ""})
  }

  public onChange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.convertToBase64(file);
  };
 
  public convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
 
    observable.subscribe((imagem) => {
      this.myimage = imagem;
      this.produtoForm.patchValue({imagem: imagem})
    })
  }
 
  public readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
 
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
  

}
