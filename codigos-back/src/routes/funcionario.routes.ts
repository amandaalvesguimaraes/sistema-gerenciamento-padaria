import { Router, Request, Response } from 'express';

const funcionarioRouter = Router();

funcionarioRouter.route("/")
    .get((req: Request, res: Response) => {
        return res.json({Message: "GET recebido com sucesso na rota /funcionarios"});
    })
    .post((req: Request, res: Response) => {
        return res.json({Message: "POST recebido com sucesso na rota /funcionarios"});
    })
    .put((req: Request, res: Response) => {
        return res.json({Message: "PUT recebido com sucesso na rota /funcionarios"});
    })
    .delete((req: Request, res: Response) => {
        return res.json({Message: "DELETE recebido com sucesso na rota /funcionarios"});
    });
export default funcionarioRouter;