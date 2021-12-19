import { Entradasaida } from "../models/entradasaida";

export class EntradasaidaController {
    entradasaidas : Entradasaida [];

    constructor() {
        this.entradasaidas = [];
    }

    getAllEntradasaidas(): Entradasaida[] {
        return this.entradasaidas;
    }

    createRegistro(email : string, vendas: number, hr_entrada : string, hr_saida: string, logado : boolean) {
        let registro = new Entradasaida(email, vendas, hr_entrada, hr_saida, logado);
        this.entradasaidas.push(registro);
    }

    updateRegistro(email : string, hr_entrada : string, hr_saida: string, option: number) {
        switch (option) {
            case 1: {
                this.addVenda(email);
            }
            case 2: {
                this.clearVendas(email);
            }
            case 3: {
                this.logar(email, hr_entrada);
            }
            case 4: {
                this.sair(email, hr_saida);
            }
        }
    }

    addVenda(email : string) { //1
        let registroIndex = this.entradasaidas.findIndex(u => u.email == email);
        this.entradasaidas[registroIndex].vendas ++;
    }

    clearVendas(email : string) { //2 - quando começa de novo
        let registroIndex = this.entradasaidas.findIndex(u => u.email == email);
        this.entradasaidas[registroIndex].vendas = 0;
        this.entradasaidas[registroIndex].registrar();
    }

    logar(email : string, hr_entrada : string) { //3
        let registroIndex = this.entradasaidas.findIndex(u => u.email == email);
        this.entradasaidas[registroIndex].logado = true;
        this.entradasaidas[registroIndex].hr_entrada = hr_entrada;
    }

    sair(email : string, hr_saida : string) { //4
        let registroIndex = this.entradasaidas.findIndex(u => u.email == email);
        this.entradasaidas[registroIndex].logado = false;
        this.entradasaidas[registroIndex].hr_saida = hr_saida;
        this.clearVendas(email);
    }
    
}