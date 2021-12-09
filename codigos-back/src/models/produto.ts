export class Produto {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    validade: Date;

    
    constructor (id: number, nome: string, preco: number, quantidade: number, validade: Date) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.validade = validade;
    }
}