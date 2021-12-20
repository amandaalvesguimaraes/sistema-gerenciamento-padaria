import { Router, Request, Response } from 'express';
import { VendaController } from '../controllers/venda.controller';
import { ProdutoController } from '../controllers/produto.controller';
import { Produto } from '../models/produto';
import { Venda } from '../models/venda';

const vendaRouter = Router();

const vendaController = new VendaController();
const produtoController = new ProdutoController();

vendaRouter.route("/")
    .get((req: Request, res: Response) =>{

        let vendas = vendaController.getAllVendas();
        return res.json({vendas});

    })

    .post((req: Request, res: Response) =>{

        let produto : Produto = req.body.produto;
        let pagamento: number = parseInt(req.body.pagamento);
        let quantidade: number = parseInt(req.body.quantidade);
        let preco: number = parseInt(req.body.quantidade)* parseInt(req.body.produto.preco);
        let troco: number = parseInt(req.body.pagamento) - preco;

        const newVenda = vendaController.createVenda(produto,quantidade, pagamento);

        if(newVenda == 3){
            let updateProduto = produtoController.updateProduto(produto.nome, produto.preco, produto.quantidade-quantidade,produto.validade);
            //tentando fazer com que a quantidade no estoque diminua pela quantidade comprada
            return res.json({Message: "Venda realizada com sucesso"});
        }else if(newVenda == 1){
            return res.status(409).json({err: "O valor do pagamento é inferior ao valor da compra"});
        }else if(newVenda == 2){
            return res.status(409).json({err: "O produto não tem estoque o suficiente para a quantidade desejada"});
        }
        
        
    })

    .put((req: Request, res: Response) =>{
        return res.json({Warning: "Método PUT não suportado para a rota /vendas"});

    })

    .delete((req: Request, res: Response) =>{
        return res.json({Warning: "Método DELETE não suportado para a rota /vendas"});

    });
vendaRouter.route("/:id")
        .get((req: Request, res: Response) => {
            let id: number = parseInt(req.params.id);            
            let venda = vendaController.getVendaById(id);

            if(!venda){
                return res.status(404).json({ err : "Venda não encontrada"});
            }
            return res.json({venda});
        })

        .post((req: Request, res: Response) => {
            return res.json({Warning: "Método POST não suportado para a rota /vendas/:id"});
        })

        .put((req: Request, res: Response) =>{
            return res.json({Warning: "Método PUT não suportado para a rota /vendas/:id"});
    
        })

        .delete((req: Request, res: Response) =>{
            return res.json({Warning: "Método DELETE não suportado para a rota /vendas/:id"});
    
        })

    

    

export default vendaRouter;


