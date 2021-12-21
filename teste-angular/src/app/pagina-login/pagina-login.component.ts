import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './../services/funcionario.service';
import { Router } from '@angular/router';
import { EntradasaidaService } from '../services/entradasaida.service';


@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})

export class PaginaLoginComponent implements OnInit {
  
  emailLogin: string = "";
  senhaLogin: string = "";


  constructor(private funcionarioService: FuncionarioService, private router: Router, private entradasaidaService: EntradasaidaService) { }

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
          let horaAtual = (new Date()).toString();
          this.entradasaidaService.updateRegistro(this.emailLogin, 0, horaAtual, "-", "3").subscribe();
          this.entradasaidaService.setFuncionario(this.emailLogin); //
          this.entradasaidaService.getAllEntradasaidas().subscribe();
          this.router.navigate(['/home']);
        },
        error: (err) => {
          alert(err.error.err);
        }
      })
    }
  }

}
