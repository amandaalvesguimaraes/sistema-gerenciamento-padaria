export class Entradasaida {
    email: string;
    registrosanteriores : String [];
    vendas: number;
    hr_entrada : string;
    hr_saida : string;
    logado : boolean;
    count : number;
    
    constructor (email : string, vendas : number, hr_entrada : string, hr_saida : string, logado : boolean) {
        this.email = email;
        this.vendas = vendas;
        this.hr_entrada = hr_entrada;
        this.hr_saida = hr_saida;
        this.logado = logado;
        this.count = 0;
        this.registrosanteriores = [];
    }

    registrar() {
        this.registrosanteriores[this.count] = "Entrada: " + this.hr_entrada + "Saída: " + this.hr_saida;
        this.count ++;
    }
}