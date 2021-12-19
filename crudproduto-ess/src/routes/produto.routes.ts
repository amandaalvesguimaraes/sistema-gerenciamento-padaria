import { Router, Request, Response } from 'express';
import { ProdutoController } from '../controllers/produto.controller';
import { Produto } from '../models/produto';


const produtoRouter = Router();
const produtoController = new ProdutoController();

produtoRouter.route("/")
    .get((req: Request, res: Response) => {

        let produtos = produtoController.getAllProdutos();

        return res.json({produtos});
    })

    .post((req: Request, res: Response) => {

        let nome : string = req.body.nome;
        let preco : number = parseInt(req.body.preco);
        let quantidade : number = parseInt(req.body.quantidade);
        let validade : Date = new Date(req.body.validade);
        

        const newproduto = produtoController.createProduto(nome, preco, quantidade, validade);

        switch(newproduto) {
            case 1: { 
                return res.status(409).json({error: "Erro. Já existe um produto com esse nome."});
            } 
            case 2: { 
                return res.status(409).json({error: "Erro. Data de validade inválida."});
            }
            case 3: {
                return res.status(409).json({error: "Erro. Preço inválido."});
            }
            case 4: {
                return res.status(409).json({error: "Erro. Quantidade inválida."});
            }
            case 5: {
                return res.status(409).json({error: "Erro. Nome inválido."});
            }
            default: { 
                return res.json({error: "Produto cadastrado com sucesso!"});
            } 
        } 
         
    })

    .put((req: Request, res: Response) => {
        return res.json({Warning: "Método PUT não suportado para a rota /users"});
    })

    .delete((req: Request, res: Response) => {
        return res.json({Warning: "Método DELETE não suportado para a rota /users"});
    });

produtoRouter.route("/:nome")
    .get((req: Request, res: Response) => {

        let nomebusca = req.params.nome;
        let produto = produtoController.getProdutoByNome(nomebusca);
        return res.json({produto});
    })
    
    .post((req: Request, res: Response) => {
        return res.json({Warning: "Método POST não suportado para a rota /:nome"});
    })

    .put((req: Request, res: Response) => {

        let nome : string = req.params.nome;

        let preco : number = parseInt(req.body.preco);
        let quantidade : number = parseInt(req.body.quantidade);
        let validade : Date = new Date(req.body.validade);

        let updateProduto = produtoController.updateProduto(nome, preco, quantidade, validade);

        switch(updateProduto) { 
            case 1: { 
                return res.status(404).json({Message: "Erro. Usuário não encontrado."});
            } 
            case 2: { 
                return res.status(409).json({Message: "Erro. Data de validade inválida."});
            }
            case 3: {
                return res.status(409).json({Message: "Erro. Preço inválido."});
            }
            case 4: {
                return res.status(409).json({Message: "Erro. Quantidade inválida."});
            }
            default: { 
                return res.json({Message: "Produto atualizado com sucesso!"});
            } 
        } 

    })

    .delete((req: Request, res: Response) => {
        let nome : string = req.params.nome;

        let deleteProduto = produtoController.deleteProduto(nome);

        if (!deleteProduto) {
            return res.status(404).json({Message: "Erro. Produto não encontrado."});
        }

        return res.json({Message: "Produto removido com sucesso!"});
    });




export default produtoRouter;