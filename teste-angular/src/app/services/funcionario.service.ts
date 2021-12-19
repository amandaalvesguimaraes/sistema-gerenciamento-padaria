import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Funcionario } from '../models/funcionario';

@Injectable({
    providedIn: 'root'
})
export class FuncionarioService {
    constructor (private http: HttpClient) { }

    criarFuncionario(nome: string, email: string, cpf: string, senha: string) : Observable<any> {
        const funcionario = new Funcionario(nome, email, cpf, senha);
        return this.http.post<any>(`${environment.url}/funcionarios`, funcionario);
    }

    getFuncionario(email: string, senha: string): Observable<any> {
        const funcionario = new Funcionario("lalalala", email, "0000", senha);
        return this.http.put<any>(`${environment.url}/funcionarios/login`, funcionario);
    }
}