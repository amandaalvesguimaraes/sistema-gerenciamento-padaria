import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entradasaida } from '../models/entradasaida';

@Injectable({
    providedIn: 'root'
  })
  export class EntradasaidaService {

    email : string = "";
  
    constructor(private http : HttpClient) {
  
  
     }

     getFuncionarioAtual() : string {
      return this.email;
     }

     setFuncionario(email : string) {
       this.email = email;
     }
  
    getAllEntradasaidas() : Observable<Entradasaida[]> {
      return this.http.get<Entradasaida[]>('http://localhost:3000/entradasaidas');
  
    }
  
    createRegistro(email: string, vendas : number, hr_entrada : string, hr_saida : string) : Observable<any> {
      const e = new Entradasaida(email, vendas, hr_entrada, hr_saida, false);
      return this.http.post<any>('http://localhost:3000/entradasaidas', e);
      
    }
  
    updateRegistro(email: string, vendas : number, hr_entrada : string, hr_saida : string, option : string) : Observable<any> {
        const e = new Entradasaida(option, vendas, hr_entrada, hr_saida, false);
        return this.http.put<any>(`${environment.url}/entradasaidas/${email}`, e);
    }
  }
  