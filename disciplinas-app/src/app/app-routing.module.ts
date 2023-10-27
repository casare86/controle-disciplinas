import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { NotasComponent } from './notas/notas.component';
import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';

const routes: Routes = [
  { path: 'calendario', component: CalendarioComponent },
  { path: 'disciplinas', component: DisciplinasComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'cadastro-disciplinas', component: DisciplinaCadastroComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
