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

  carregarDisciplinas(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const response = await fetch('http://localhost:3000/disciplinas');

        if (!response.ok) {
          console.error('Erro ao carregar disciplinas:', response);
          this.mensagemErro = 'Erro ao carregar disciplinas. Tente novamente mais tarde. Verifique se o json-server está rodando';
          reject();
        }

        const data = await response.json();
        this.disciplinas = data;
        this.zeroDisciplinas = data.length === 0;
        resolve();
      } catch (error) {
        console.error('Erro ao carregar disciplinas:', error);
        this.mensagemErro = 'Erro ao carregar disciplinas. Tente novamente mais tarde. Verifique se o json-server está rodando';
        reject();
      }
    });
  }

  editarDisciplina(disciplina: any) {
    // Lógica para editar a disciplina
    console.log('Editar disciplina:', disciplina);
    // Aqui você pode abrir um modal ou navegar para outra página de edição
  }

  excluirDisciplina(disciplina: any) {
    // Lógica para excluir a disciplina
    console.log('Excluir disciplina:', disciplina);
    // Aqui você pode abrir um modal de confirmação antes de excluir
  }
  
  ngAfterViewInit() {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }
}
