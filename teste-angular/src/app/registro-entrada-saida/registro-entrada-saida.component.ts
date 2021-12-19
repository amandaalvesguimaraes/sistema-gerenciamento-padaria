import { Component, OnInit } from '@angular/core';
import { Entradasaida } from '../models/entradasaida';
import { EntradasaidaService } from '../services/entradasaida.service';
import { FuncionarioService } from '../services/funcionario.service';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-registro-entrada-saida',
  templateUrl: './registro-entrada-saida.component.html',
  styleUrls: ['./registro-entrada-saida.component.css']
})
export class RegistroEntradaSaidaComponent implements OnInit {

  constructor(private entradasaidaService : EntradasaidaService, private funcionarioService : FuncionarioService) { } //é produto por enquanto. depois trocar para registro de venda

  funcionario_atual : string = "";
  entradasaidas : Entradasaida [] = [];

  registros_entrada_saida : String[] = [];
  count : number = 0;



  ngOnInit(): void {
    this.getAllRegistros();

  }

  getRegistros() {
    let c : number = 0;
    this.registros_entrada_saida = [];
    for (let i: number  = 0; i < this.entradasaidas.length; i++) {
      if (this.entradasaidas[i].email == this.funcionario_atual) {
        
        this.registros_entrada_saida = this.entradasaidas[i].registrosanteriores;
      }
    }
  }

  getAllRegistros() {
      this.entradasaidaService.getAllEntradasaidas().subscribe({
        next: (entradasaidas) => {
        console.log(entradasaidas);
        this.entradasaidas = Object.values(entradasaidas);
        this.entradasaidas = Object.values(this.entradasaidas[0]);
        console.log(this.entradasaidas);
        },
        error: () => {
          alert("Nao foi possivel obter os registros de entrada e saída");
        }
    })
  }

  getFuncionarioLogado() {
    for (let i: number  = 0; i < this.entradasaidas.length; i++) {
      if (this.entradasaidas[i].logado) {
        this.funcionario_atual = this.entradasaidas[i].email;
      }
    }
  }


  createRegistro(emailN: string, vendasN: number, hr_entradaN: string, hr_saidaN: string) {
    let vendas : number = 0;
    return this.entradasaidaService.createRegistro(emailN, vendasN, hr_entradaN, hr_saidaN).subscribe();    
  }

  updateRegistro(email: string, vendas : number, hr_entrada : string, hr_saida : string, option : string) {
    this.funcionario_atual = email;
    return this.entradasaidaService.updateRegistro(email, vendas, hr_entrada, hr_saida, option);
  }

}
