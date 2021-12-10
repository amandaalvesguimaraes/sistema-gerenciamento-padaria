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

    getProdutoByNome(nomebusca : string) : Produto {
        const produto = this.produtos.find(u => u.nome == nomebusca);
        return produto;
    }

    createProduto(nome : string, preco: number, quantidade: number, validade: Date) : number {
        if (this.produtos.find(u => u.nome == nome)) {
            return 1; //nomes iguais
        } else {
            let dataAtual = new Date();
            if (validade < dataAtual) {
                return 2; //data de validade inválida
            } else {
                let newproduto = new Produto(this.count, nome, preco, quantidade, validade);
                this.produtos.push(newproduto);
                this.count ++;
                return 0; //ok
            }
        }
    }

    updateProduto(nome : string, preco : number, quantidade: number, validade: Date) : number {
        let produtoIndex = this.produtos.findIndex(u => u.nome == nome);

        if (produtoIndex == -1) {
            return 1; //usuario nao encontrado
        }

        let dataAtual = new Date();
        if (validade < dataAtual) {
            return 2; //data de validade invalida
        } else {
            this.produtos[produtoIndex].preco = preco;
            this.produtos[produtoIndex].quantidade = quantidade;
            this.produtos[produtoIndex].validade = validade;
            return 0; //ok
        }
    }

    deleteProduto(nome : string) : boolean {
        let produtoIndex = this.produtos.findIndex(u => u.nome == nome);

        if (produtoIndex == -1) {
            return false; //usuario nao encontrado
        }

        this.produtos.splice(produtoIndex, 1);
        return true;

    }



    
}