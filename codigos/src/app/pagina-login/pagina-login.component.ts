import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './../services/funcionario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})

export class PaginaLoginComponent implements OnInit {
  emailLogin: string = "";
  senhaLogin: string = "";


  constructor(private funcionarioService: FuncionarioService, private router: Router) { }

  ngOnInit(): void {
    this.emailLogin = "";
    this.senhaLogin = "";
  }

  getFuncionario() {
    if (this.emailLogin == "" || this.senhaLogin == "") {
      alert("Preencha todos os campos!");
    } else {
      this.funcionarioService.getFuncionario(this.emailLogin, this.senhaLogin).subscribe({
        next: (message) => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          alert(err.error.err);
        }
      })
    }
  }

}


