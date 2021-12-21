import { Router, Request, Response } from 'express';
import { EntradasaidaController } from '../controllers/entradasaida.controller';
import { Entradasaida } from '../models/entradasaida';


const entradasaidaRouter = Router();
const entradasaidaController = new EntradasaidaController();

entradasaidaRouter.route("/")
    .get((req: Request, res: Response) => {

        let entradasaidas = entradasaidaController.getAllEntradasaidas();

        return res.json({entradasaidas});
    })

    .post((req: Request, res: Response) => {

        let email : string = req.body.email;
        let vendas : number = parseInt(req.body.vendas);
        let hr_entrada : string = req.body.hr_entrada;
        let hr_saida : string = req.body.hr_saida;
        let logado : boolean = false;
        

        const newregistro = entradasaidaController.createRegistro(email, vendas, hr_entrada, hr_saida, logado);

         
    })

    .put((req: Request, res: Response) => {
        return res.json({Warning: "Método PUT não suportado para a rota /users"});
    })

    .delete((req: Request, res: Response) => {
        return res.json({Warning: "Método DELETE não suportado para a rota /users"});
    });

entradasaidaRouter.route("/:email")
    .get((req: Request, res: Response) => {

    })
    
    .post((req: Request, res: Response) => {
        return res.json({Warning: "Método POST não suportado para a rota /:nome"});
    })

    .put((req: Request, res: Response) => {

        let email : string = req.params.email;
        let hr_entrada : string = req.body.hr_entrada;
        let hr_saida : string = req.body.hr_saida;
        let option : number = parseInt(req.body.email);


        let updateRegistro = entradasaidaController.updateRegistro(email, hr_entrada, hr_saida, option);


    })

    .delete((req: Request, res: Response) => {
        
    });




export default entradasaidaRouter;