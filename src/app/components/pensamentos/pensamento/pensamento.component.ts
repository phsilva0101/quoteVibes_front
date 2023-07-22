import { Component, OnInit, Input } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autor: '',
    modelo: '',
  };

  constructor(private readonly service: PensamentoService) {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  excluir(): void {
    console.log(this.pensamento.id);
    this.service.removerPensamento(this.pensamento.id).subscribe(() => {
      alert('Pensamento excluído com sucesso!');
      window.location.reload();
    });
  }
}
