import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mensagem? : String;
  public isLogged : boolean = false;

  public loginForm! : FormGroup;

  constructor
  (
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  )
  { 
    this.inicializarForm()
  }

  ngOnInit(): void {
    this.getIsLogged();
  }

  public logar(){
    if(!this.loginForm.valid){return};

    this.loginService.validarAdmin(this.loginForm.value).subscribe({
      next: (retorno) => {
        if(retorno){
          sessionStorage.setItem("login", "1");
          this.isLogged = true;
          this.router.navigate(['']);
        }else{
          this.mensagem = "Login e Senha incorretas";
        }
      },
      error: (erro) => this.mensagem = "Erro ao logar"
    }).add(() => {})
  }

  public getIsLogged(){
    let logingInfo = sessionStorage.getItem("login");

    if(logingInfo){
      this.isLogged = true;
    }
  }

  public logout(){
    sessionStorage.removeItem("login");
    this.isLogged = false;
  }

  inicializarForm(){
    this.loginForm = this.fb.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }
}
