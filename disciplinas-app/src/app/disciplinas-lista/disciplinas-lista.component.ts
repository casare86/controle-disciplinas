import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplinas-lista',
  templateUrl: './disciplinas-lista.component.html',
  styleUrls: ['./disciplinas-lista.component.less']
})

export class DisciplinasListaComponent implements AfterViewInit, OnInit {
  zeroDisciplinas = false;
  disciplinas: any[] = [];
  mensagemErro = "";

  ngOnInit() {
    this.carregarDisciplinas();
  }

  carregarDisciplinas() {
    console.log("fetfch")
    fetch('http://localhost:3000/disciplinas')
      .then(response => response.json())
      .then(data => {
        this.disciplinas = data;
        this.zeroDisciplinas = data.length == 0;
        this.verificarListaVazia();
      })
      .catch(error => {
        console.error('Erro ao carregar disciplinas:', error);
        this.mensagemErro = 'Erro ao carregar disciplinas. Tente novamente mais tarde. verifique se o json-server está rodando';
      });
  }

  ngAfterViewInit() {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }

  verificarListaVazia() {
    this.zeroDisciplinas = this.disciplinas.length === 0;
  }
}
