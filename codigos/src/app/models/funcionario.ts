export class Funcionario {
    nome: string;
    email: string;
    cpf: string;
    senha: string;
    
    constructor (nome: string, email: string, cpf: string, senha: string) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.senha = senha;
    }
}