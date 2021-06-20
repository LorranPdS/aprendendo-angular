import { Component, OnInit } from '@angular/core';
import { PESSOAS } from '../mock-pessoas';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoas = PESSOAS;
  selectedPessoa?: Pessoa;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pessoa: Pessoa): void {
    this.selectedPessoa = pessoa
  }

}
