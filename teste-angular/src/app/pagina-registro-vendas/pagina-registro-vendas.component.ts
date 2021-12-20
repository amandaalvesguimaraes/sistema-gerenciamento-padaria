import { Component, OnInit } from '@angular/core';
import { VendasService } from '../services/venda.service';
import { ProdutosService } from '../services/produtos.service';
import { Router } from '@angular/router';
import { Produto } from '../models/produto';
import { Venda } from '../models/venda';

@Component({
    selector: 'app-pagina-registro-vendas',
    templateUrl: './pagina-registro-vendas.component.html',
    styleUrls: ['./pagina-registro-vendas.component.css']
  })

  export class PaginaRegistroVendasComponent implements OnInit {
    produto: Produto = new Produto(0,"",0,0,new Date());

    produtos: Produto[] = [];
    vendas: Venda[] = [];
    pagamento: number = 0;
    quantidade: number = 0;
    nomeBusca : string = "";
    produtosexibicao : Produto [] = [];


    



    constructor(private vendasService: VendasService, private produtosService: ProdutosService){}

    ngOnInit(): void {
      this.produto = new Produto(0,"",0,0,new Date());
      this.pagamento = 0;
      this.quantidade = 0;
      this.getAllVendas();
      //this.getAllProdutos();
        
    }

    getAllVendas(){
      return this.vendasService.getAllVendas().subscribe({

        next: (vendas) =>{
          this.vendas= vendas;

        },
        error: () =>{
          alert("Não foi possível obter as vendas do servidor")

        }

      });
    }

    getAllProdutos() {
      return this.produtosService.getAllProdutos().subscribe({
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

    createVenda(){

      this.vendasService.createVenda(this.produto,this.pagamento,this.quantidade).subscribe({
        next: (message) =>{
          //this.produtosService.updateProduto(this.produto.nome, this.produto.preco, this.produto.quantidade-this.quantidade, this.produto.validade);
          this.produto = new Produto(0,"",0,0,new Date());
          this.pagamento = 0;
          this.quantidade = 0;
          alert(message.Message);

        },
        error:(err)=>{
          alert(err.error.err)
        }


      });
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



    }