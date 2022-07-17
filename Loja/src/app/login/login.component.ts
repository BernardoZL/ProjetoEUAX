import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mensagem? : String;
  public classeMensagem : String = "bg-danger";
  public isLogged : boolean = false;

  public loginForm! : FormGroup;

  constructor(private fb: FormBuilder) { 
    this.inicializarForm()
  }

  ngOnInit(): void {
    this.getIsLogged();
  }

  public logar(){
    console.log(this.loginForm.value)
    sessionStorage.setItem("login", "1")
    this.isLogged = true;
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
