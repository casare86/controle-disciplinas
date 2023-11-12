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

  async carregarDisciplinas() {
    try {
      const response = await fetch('http://localhost:3000/disciplinas');
     
      if (!response.ok) {
        console.error('Erro ao carregar disciplinas:', response);
        this.mensagemErro = 'Erro ao carregar disciplinas. Tente novamente mais tarde. verifique se o json-server está rodando';
      }

      const data = await response.json();
      this.disciplinas = data;
      this.zeroDisciplinas = data.length === 0;
      console.log("Disciplinas = " + this.zeroDisciplinas )
    } catch (error) {
      console.error('Erro ao carregar disciplinas:', error);
      this.mensagemErro = 'Erro ao carregar disciplinas. Tente novamente mais tarde. Verifique se o json-server está rodando';
    }
  }
  
  ngAfterViewInit() {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }
}
