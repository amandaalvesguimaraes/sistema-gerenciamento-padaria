import { Produto } from "../models/produto";

export class ProdutoController {
    produtos: Produto[];
    count : number;

    constructor() {
        this.produtos = [];
        this.count = 0;
    }

    getAllProdutos(): Produto[] {
        return this.produtos;
    }

    createProduto(nome : string, preco: number, quantidade: number, validade: Date) : boolean {
        if (this.produtos.find(u => u.nome == nome)) {
            return false; //nomes iguais
        } else {
            let dataAtual = new Date();
            if (validade.getFullYear() < dataAtual.getFullYear()) {
                return false;
            } else if (validade.getFullYear() > dataAtual.getFullYear()) {
                let newproduto = new Produto(this.count, nome, preco, quantidade, validade);
                this.produtos.push(newproduto);
                this.count ++;
                return true;
            } else { //mesmo ano

            }
        }
    }

    
}