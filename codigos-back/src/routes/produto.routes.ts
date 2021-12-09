import { Router, Request, Response } from 'express';
import { ProdutoController } from '../controllers/produto.controller';

const produtoRouter = Router();
const produtoController = new ProdutoController();

produtoRouter.route("/")
    .get((req: Request, res: Response) => {

        let produtos = produtoController.getAllProdutos();

        return res.json({produtos : produtos});
    })

    .post((req: Request, res: Response) => {

        let nome : string = req.body.nome;
        let preco : number = parseInt(req.body.preco);
        let quantidade : number = parseInt(req.body.quantidade);
        let validade : Date = new Date(req.body.validade);
        

        const newproduto = produtoController.createProduto(nome, preco, quantidade, validade);

        if (newproduto) {
            return res.json({Message: "Produto cadastrado com sucesso!"});
        } else {
            return res.status(409).json({Message: "Erro. Já existe um produto com esse nome."});
        }
    })

    .put((req: Request, res: Response) => {
        return res.json({Message: "PUT recebido com sucesso na rota /produtos"});
    })

    .delete((req: Request, res: Response) => {
        return res.json({Message: "DELETE recebido com sucesso na rota /produtos"});
    });

export default produtoRouter;