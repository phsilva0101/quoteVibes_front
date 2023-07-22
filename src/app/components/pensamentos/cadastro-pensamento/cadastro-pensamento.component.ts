import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-cadastro-pensamento',
  templateUrl: './cadastro-pensamento.component.html',
  styleUrls: ['./cadastro-pensamento.component.css'],
})
export class CadastroPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autor: '',
    modelo: '',
  };

  id: any = this.router.url.split('/')[2];

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {
    if (this.id) this.obterPorId();
  }

  criarAtualizarPensamento(): void {

    if (this.id) {
      this.service.editarPensamento(this.id, this.pensamento).subscribe((pensamento) => {
        console.log(pensamento);
        this.router.navigate(['/listar-pensamento']);
      });
      return;
    }
    
    this.service.criarPensamento(this.pensamento).subscribe((pensamento) => {
      console.log(pensamento);
      this.router.navigate(['/listar-pensamento']);
    });
  }

  obterPorId(): void {
    const id = this.router.url.split('/')[2];
    console.log(id);
    this.service.buscarPorId(id).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  cancelar(): void {
    //copilot how i make a redirect to list
    this.router.navigate(['/listar-pensamento']);
  }
}
