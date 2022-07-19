import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})

export class LoginService {

    LoginBaseUrl = `${environment.baseUrl}api/usuario`
    constructor(private  http: HttpClient){}

    validarAdmin(usuario: {nome: string, senha: string}){
        return this.http.post(`${this.LoginBaseUrl}`, usuario)
    }
    
}

