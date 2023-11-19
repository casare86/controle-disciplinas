import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';

@Component({
  selector: 'app-disciplinas-lista',
  templateUrl: './disciplinas-lista.component.html',
  styleUrls: ['./disciplinas-lista.component.less']
})

export class DisciplinasListaComponent implements AfterViewInit, OnInit {

  constructor(private disciplinaService: DisciplinaService) { }

  zeroDisciplinas = false;
  disciplinas: any[] = [];
  mensagemErro = "";
  disciplinaEditada: any = {};

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


  async adicionarDisciplina(novaDisciplina: any) {
    try {
      await this.disciplinaService.addDisciplina(novaDisciplina).toPromise();
      this.carregarDisciplinas();
    } catch (error) {
      console.error('Erro ao adicionar disciplina:', error);
      // Lógica para exibir mensagem de erro ao usuário
    }
  }

  async editarDisciplina(disciplina: any) {
    try {
      await this.disciplinaService.editarDisciplina(disciplina).toPromise();
      this.carregarDisciplinas();
    } catch (error) {
      console.error('Erro ao editar disciplina:', error);
      // Lógica para exibir mensagem de erro ao usuário
    }
  }

  async excluirDisciplina(id: number) {
    try {
      await this.disciplinaService.excluirDisciplina(id).toPromise();
      this.carregarDisciplinas();
    } catch (error) {
      console.error('Erro ao excluir disciplina:', error);
    }
  }

  carregarDisciplinaParaEdicao(disciplina: any) {
    this.disciplinaEditada = { ...disciplina }; // Copia os dados da disciplina para o objeto de edição
  }

  salvarEdicao() {
    this.disciplinaService.editarDisciplina(this.disciplinaEditada).subscribe(
      () => {
        this.carregarDisciplinas(); 
      },
      error => {
        console.error('Erro ao editar disciplina:', error);
      }
    );
    this.fecharModal();
  }

  abrirModal(disciplina: any) {
    this.disciplinaEditada = { ...disciplina };
    const modal = document.querySelector('#editModal');
    M.Modal.init(modal!);
    const instance = M.Modal.getInstance(modal!).open();
         
  }

  fecharModal() {
    const modal = document.querySelector('#editModal');
    const instance = M.Modal.getInstance(modal!).close();
  }

  
  ngAfterViewInit() {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }
}
