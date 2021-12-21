import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from "../models/produto";
import { Venda } from "../models/venda";



@Injectable({
    providedIn: 'root'
})
export class VendasService{

    

    

    constructor(private http: HttpClient){
       
    }

    getAllVendas() : Observable <Venda[]>{
        return this.http.get<Venda[]>(`${environment.url}/vendas`)
    }

    createVenda(produto: Produto, pagamento: number, quantidade: number): Observable<any>{
        //this.updateProduto(produto.nome,produto.preco,produto.quantidade-quantidade,produto.validade);
        const venda = new Venda(0, produto, quantidade, produto.preco, pagamento, pagamento - produto.preco);
        return this.http.post<any>(`${environment.url}/vendas`, venda);

    }
   

  
 
}