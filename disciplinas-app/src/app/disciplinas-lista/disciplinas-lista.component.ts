import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-disciplinas-lista',
  templateUrl: './disciplinas-lista.component.html',
  styleUrls: ['./disciplinas-lista.component.less']
})

export class DisciplinasListaComponent implements AfterViewInit {
  disciplinas = [
    { titulo: 'Disciplina 1', conteudo: 'Conteúdo da Disciplina 1' },
    { titulo: 'Disciplina 2', conteudo: 'Conteúdo da Disciplina 2' },
  ];

  ngAfterViewInit() {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }

  exibirMensagem = false;

  // Verifica se a lista de disciplinas está vazia
  verificarListaVazia() {
    this.exibirMensagem = this.disciplinas.length === 0;
  }
}
