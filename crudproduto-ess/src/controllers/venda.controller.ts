import { Produto } from "../models/produto";
import { Venda } from "../models/venda";

export class VendaController{

    vendas: Venda[];
    count: number;

    constructor(){
        this.vendas = [];
        this.count = 0;
    }

    getAllVendas(): Venda[]{
        return this.vendas;
    }

    getVendaById(id: number): Venda{
        const venda = this.vendas.find(u => u.id == id);
        return venda;
    }

    createVenda(produto: Produto, quantidade: number, pagamento: number): number{
        if(pagamento < produto.preco*quantidade){
            return 1;//o pagamento é inferior ao preço da compra
        }else if(produto.quantidade < quantidade){
            return 2;//o produto não tem estoque o suficiente
        }else{
        let newVenda = new Venda(this.count, produto, quantidade,produto.preco*quantidade, pagamento, pagamento-produto.preco);
        this.vendas.push(newVenda);
        this.count++;
        return 3;//sucesso
        }
        
    }



}