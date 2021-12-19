import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from '../models/produto';



@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http : HttpClient) {


   }

  getAllProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>('http://localhost:3000/users');

  }

  createProduto(nome : string, preco : number, quantidade : number, validade : Date) : Observable<any> {
    const p = new Produto(0, nome, preco, quantidade, validade);
    return this.http.post<any>('http://localhost:3000/users', p);
    
  }

  deleteProduto(nome: string) : Observable<any> {
    return this.http.delete<any>(`${environment.url}/users/${nome}`);
  }

  updateProduto(nome : string, preco : number, quantidade : number, validade : Date) : Observable<any> {
    const p = new Produto(0, nome, preco, quantidade, validade);
    return this.http.put<any>(`${environment.url}/users/${nome}`, p);
  }
}
