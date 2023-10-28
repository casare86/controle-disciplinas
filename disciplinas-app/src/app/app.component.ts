import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';
import { Disciplina } from './models/disciplina.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('mobile') sideNav? : ElementRef;
  
  disciplinaCadastrada!: Disciplina;
  
  abrirModalDeSucesso(disciplina: Disciplina) {
    this.disciplinaCadastrada = disciplina;
    // Lógica para abrir o modal de sucesso aqui
  }

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }
 

  title = 'disciplinas-app';
}
