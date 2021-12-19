import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './../services/funcionario.service';



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

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.nome = "";
    this.email = "";
    this.cpf = "";
    this.senha = "";
  }

  criarFuncionario() {
    this.funcionarioService.criarFuncionario(this.nome, this.email, this.cpf, this.senha).subscribe({
      next: (message) => {
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
