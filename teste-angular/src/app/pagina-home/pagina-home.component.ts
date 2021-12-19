import { Component, OnInit } from '@angular/core';
import { Entradasaida } from '../models/entradasaida';
import { EntradasaidaService } from '../services/entradasaida.service';

@Component({
  selector: 'app-pagina-home',
  templateUrl: './pagina-home.component.html',
  styleUrls: ['./pagina-home.component.css']
})
export class PaginaHomeComponent implements OnInit {

  constructor(private entradasaidaService : EntradasaidaService) { }

  email : string = "";
  registros : Entradasaida [] = [];

  ngOnInit(): void {
    this.entradasaidaService.getAllEntradasaidas().subscribe({
      next: (entradasaidas) => {
      console.log(entradasaidas);
      this.registros = Object.values(entradasaidas);
      this.registros = Object.values(this.registros[0]);
      console.log(this.registros);
      },
      error: () => {
        alert("Nao foi possivel obter os registros de entrada e saída");
      }
  })
  }

  getFuncionarioAtual() : string {
    for (let i : number = 0; i < this.registros.length; i++) {
      if (this.registros[i].logado) {
        alert(this.registros[i].email);
        return this.registros[i].email;
      }
    }
    return "";
  }

  sair() {
    let horaAtual : string = (new Date()).toString();
    this.entradasaidaService.updateRegistro(this.email, 0, "-", horaAtual, "4").subscribe();
    this.entradasaidaService.getAllEntradasaidas().subscribe();
  }

}

