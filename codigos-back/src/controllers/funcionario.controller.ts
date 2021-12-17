import { Funcionario } from "../models/funcionario";

export class FuncionarioController {
    funcionarios: Funcionario[];

    constructor() {
        this.funcionarios = [];
    }

    createFuncionario(nome: string, email: string, cpf: string, senha: string): number {
        if (this.funcionarios.find(f => f.email == email)) { //já tem funcionário com esse email
            return 0;
        } else if (this.funcionarios.find(f => f.cpf == cpf)) { //já tem funcionário com esse cpf
            return 1;
        } else if (!parseInt(cpf) || cpf.length != 4) { //cpf inválido
            return 2;
        } else if (senha.length < 4) { //senha inválida
            return 3;
        } else if (nome == null || email == null || cpf == null || senha == null) { //campo nulo
            return 4;
        }
        const newFuncionario = new Funcionario(nome, email, cpf, senha);
        this.funcionarios.push(newFuncionario);
        return 5;
    }

    getFuncionario(email: string, senha: string): number {
        let index = this.funcionarios.findIndex(f => f.email == email);
        if (index == -1) {
            return 1; //não existe email cadastrado
        } else {
            if (this.funcionarios[index].senha == senha) {
                return 2; //login realizado com sucesso
            } else {
                return 3; //senha errada
            }
        }
    }
    
}