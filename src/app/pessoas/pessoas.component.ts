import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoa: Pessoa = {
    id: 1,
    nome: 'Adriana'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
