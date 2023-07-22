import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[] = []

  constructor(
    private readonly service: PensamentoService,
  ) { }

  ngOnInit(): void {
    this.listar()
  }

listar(){
  this.service.listar().subscribe(pensamentos => {
    this.listaPensamentos = pensamentos;
  })
}
}
