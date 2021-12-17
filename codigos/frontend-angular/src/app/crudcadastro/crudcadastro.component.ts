import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crudcadastro',
  templateUrl: './crudcadastro.component.html',
  styleUrls: ['./crudcadastro.component.css']
})
export class CrudcadastroComponent implements OnInit {

  nome : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
