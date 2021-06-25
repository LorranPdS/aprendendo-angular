import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-detalhe-pessoa',
  templateUrl: './detalhe-pessoa.component.html',
  styleUrls: ['./detalhe-pessoa.component.css']
})
export class DetalhePessoaComponent implements OnInit {

  @Input() pessoa?: Pessoa;

  constructor() { }

  ngOnInit(): void {
  }

}
