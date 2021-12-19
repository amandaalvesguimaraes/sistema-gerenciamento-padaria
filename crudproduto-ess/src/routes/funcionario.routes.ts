import { Router, Request, Response } from 'express';
import { FuncionarioController } from '../controllers/funcionario.controller';


const funcionarioRouter = Router();

const funcionarioController = new FuncionarioController();

funcionarioRouter.route("/")
    .get((req: Request, res: Response) => {
        return res.json({Warning: "Método GET não suportado para a rota /funcionarios"});
    })
    .post((req: Request, res: Response) => {
        let nome = req.body.nome;
        let email = req.body.email;
        let cpf = req.body.cpf;
        let senha = req.body.senha;

        const newFuncionario = funcionarioController.createFuncionario(nome, email, cpf, senha);

        if (newFuncionario == 0){
            return res.status(400).json({err: "Já existe funcionário cadastrado com esse email!"});
        } else if (newFuncionario == 1) {
            return res.status(400).json({err: "Já existe funcionário cadastrado com esse CPF!"});
        } else if (newFuncionario == 2) {
            return res.status(400).json({err: "CPF inválido!"});
        } else if (newFuncionario == 3) {
            return res.status(400).json({err: "As senhas precisam ter 4 ou mais caracteres!"});
        } else if (newFuncionario == 4) {
            return res.status(400).json({err: "Preencha todos os campos!"});
        } else {
            return res.status(200).json({success: "Funcionário cadastrado com sucesso!"});
        }

    })
    .put((req: Request, res: Response) => {
        return res.json({Warning: "Método PUT não suportado para a rota /funcionarios"});
    })
    .delete((req: Request, res: Response) => {
        return res.json({Warning: "Método DELETE não suportado para a rota /funcionarios"});
    });

funcionarioRouter.route("/login")
    .get((req: Request, res: Response) => {
        return res.json({Warning: "Método GET não suportado para a rota /funcionarios/login"});
    })
    .post((req: Request, res: Response) => {
        return res.json({Warning: "Método POST não suportado para a rota /funcionarios/login"});
    })
    .put((req: Request, res: Response) => {
        let email = req.body.email;
        let senha = req.body.senha;

        const newFuncionario = funcionarioController.getFuncionario(email, senha);

        
        if (newFuncionario == 1) {
            return res.status(400).json({err: "Este email não está cadastrado no sistema!"});
        } else if (newFuncionario == 2) {
            return res.status(200).json({success: "Login realizado com sucesso!"});
        } else {
            return res.status(400).json({err: "Senha incorreta!"});
        }
    })
    .delete((req: Request, res: Response) => {
        return res.json({Warning: "Método DELETE não suportado para a rota /funcionarios/login"});
    });

export default funcionarioRouter;