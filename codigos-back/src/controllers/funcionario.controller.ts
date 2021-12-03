import { Funcionario } from "../models/funcionario";

export class FuncionarioController {
    funcionarios: Funcionario[];

    constructor() {
        this.funcionarios = [];
    }

    getAllFuncionarios(): Funcionario[] {
        return this.funcionarios;
    }

    createFuncionario(funcionario: Funcionario) {
        this.funcionarios.push(funcionario);
    }

    
}