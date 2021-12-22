import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../models/produto';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-vencimento-produtos',
  templateUrl: './vencimento-produtos.component.html',
  styleUrls: ['./vencimento-produtos.component.css']
})
export class VencimentoProdutosComponent implements OnInit {

  nome: string = "";
  preco: number = 0;
  quantidade: number = 0;
  validadeT : string | null = "";
  validade: Date = new Date();


  nomeBusca : string = "";

  produtosexibicao : Produto [] = [];
  produtosexibicaoFV : Produto [] = [];


  produtos: Produto[] = []


  constructor(private produtosServices: ProdutosService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.validade = new Date();
    this.validadeT = "";
    this.getAllProdutos();
  }
 
  getAllProdutos() {
    return this.produtosServices.getAllProdutos().subscribe({
      next: (produtos) => {
        console.log(produtos);
        this.produtos = Object.values(produtos);
        this.produtos = Object.values(this.produtos[0]);
      },
      error: () => {
        alert("Nao foi possivel obter os produtos no servidor");
      }
    });
  }


  searchProdutoFV() { //procurar produto fora da validade
    let j : number = 0;
    this.produtosexibicaoFV = [];
    for (let i : number = 0; i < this.produtos.length; i++) {
      if (new Date(this.produtos[i].validade) < new Date()) {
        this.produtosexibicaoFV[j] = this.produtos[i];
        j++;
      }
    }
    if (j == 0) {
      alert("Nenhum produto fora da validade encontrado");
    }
  }

  searchProduto() {
    if (new Date(this.validade) < new Date()) {
      //alert("Já passou");
    }
    //
    let j : number = 0;
    this.produtosexibicao = [];
    this.validadeT = this.datepipe.transform(this.validade, 'dd/MM/yyyy', '+0300');
    for (let i : number = 0; i < this.produtos.length; i++) {
      let val = this.datepipe.transform(this.produtos[i].validade, 'dd/MM/yyyy', '+0300');
      if (val == this.validadeT) {
        this.produtosexibicao[j] = this.produtos[i];
        j++;
      }
    }
    if (j == 0) {
      alert("Nenhum produto encontrado");
    }
    
  }

}