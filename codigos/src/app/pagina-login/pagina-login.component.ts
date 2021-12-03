import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})

export class PaginaLoginComponent implements OnInit {
  nome: string;
  nomes: string[];
  senha: string;
  senhas: string[];


  constructor() {
    this.nome = "";
    this.senha = "";
    this.nomes = [];
    this.senhas = [];
  }

  ngOnInit(): void {
    
  }

  salvarNome() {
    if (this.nome.length >= 3) {
      this.nomes.push(this.nome);
      this.nome = "";
    }
  }

  salvarSenha() {
    if (this.senha.length >= 3) {
      this.senhas.push(this.senha);
      this.senha = "";
    }
  }

}


