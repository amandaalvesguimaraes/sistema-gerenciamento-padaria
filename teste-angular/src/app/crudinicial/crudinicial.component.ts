import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../models/produto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crudinicial',
  templateUrl: './crudinicial.component.html',
  styleUrls: ['./crudinicial.component.css']
})
export class CrudinicialComponent implements OnInit {

  nome: string = "";
  preco: number = 0;
  quantidade: number = 0;
  validade: Date = new Date();

  precoNovo: number = 0;
  quantidadeNovo: number = 0;
  validadeNovo: Date = new Date();

  nomeBusca : string = "";

  produtosexibicao : Produto [] = [];


  produtos: Produto[] = []


  constructor(private produtosServices: ProdutosService) { }

  ngOnInit(): void {
    this.nome = "";
    this.preco = 0;
    this.quantidade = 0;
    this.validade = new Date();

    this.precoNovo = 0;
    this.quantidadeNovo = 0;
    this.validadeNovo = new Date();
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

  createProduto() {
    this.produtosServices.createProduto(this.nome, this.preco, this.quantidade, this.validade).subscribe({
      next: (message) => {
        this.nome = "";
        this.preco = 0;
        this.quantidade = 0;
        this.validade = new Date();
        alert("Cadastrado");
        this.getAllProdutos();
      },
      error: (err) => {
        alert(err.error.error);
      }
    })
  }

  searchProduto() : boolean {
    this.nomeBusca = this.nomeBusca.trim();
    for (let i : number = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].nome == this.nomeBusca) {
        this.produtosexibicao[0] = this.produtos[i];
        return true;
      }
    }
    alert("Nenhum produto encontrado");
    return false;
  }

  deleteProduto(nomeProduto : string) {
    return this.produtosServices.deleteProduto(nomeProduto).subscribe({
      next: () => {
        alert("Produto removido com sucesso");
        this.getAllProdutos();
        this.produtosexibicao = [];
      },
      error: (err) => {
        alert(err.error.Message);
      }
    });
  }

  updateProduto(nomeProduto : string) {
    return this.produtosServices.updateProduto(nomeProduto, this.precoNovo, this.quantidadeNovo, this.validadeNovo).subscribe({
      next: () => {
        alert("Produto atualizado com sucesso");
        this.getAllProdutos();
        this.produtosexibicao = [];
      },
      error: (err) => {
        alert(err.error.Message);
      }
    });
  }

  
}
