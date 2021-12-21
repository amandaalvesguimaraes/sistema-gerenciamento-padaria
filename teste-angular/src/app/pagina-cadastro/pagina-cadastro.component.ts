import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './../services/funcionario.service';
import { EntradasaidaService } from '../services/entradasaida.service';
import { Entradasaida } from '../models/entradasaida';



@Component({
  selector: 'app-pagina-cadastro',
  templateUrl: './pagina-cadastro.component.html',
  styleUrls: ['./pagina-cadastro.component.css']
})
export class PaginaCadastroComponent implements OnInit {

  nome: string = "";
  email: string = "";
  cpf: string = "";
  senha: string = "";

  nomes: string[] = [];

  constructor(private funcionarioService: FuncionarioService, private entradasaidaService: EntradasaidaService) { }

  ngOnInit(): void {
    this.nome = "";
    this.email = "";
    this.cpf = "";
    this.senha = "";
  }

  criarFuncionario() {
    this.funcionarioService.criarFuncionario(this.nome, this.email, this.cpf, this.senha).subscribe({
      next: (message) => {
        this.entradasaidaService.createRegistro(this.email, 0, "NA", "NA").subscribe();
        this.entradasaidaService.getAllEntradasaidas().subscribe();
        this.nome = "";
        this.email = "";
        this.cpf = "";
        this.senha = "";
        alert(message.success);
      },
      error: (err) => {
        alert(err.error.err);
      }
    })
  }

}
