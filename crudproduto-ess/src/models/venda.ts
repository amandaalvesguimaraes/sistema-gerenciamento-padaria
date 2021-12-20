import { Produto } from "./produto";

export class Venda {
    produto: Produto;
    preco: number;
    quantidade: number;
    pagamento: number;
    troco: number;
    id: number;
    

    
    constructor (id: number, produto: Produto, quantidade: number,preco: number,pagamento:number, troco: number) {
        this.id = id;
        this.produto = produto;
        this.quantidade = quantidade;
        this.preco = this.produto.preco*quantidade;
        this.pagamento = pagamento;
        this.troco = pagamento - this.preco;
    }
}