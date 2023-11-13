import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';
import { DetalhesDataComponent } from './detalhes-data/detalhes-data.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'disciplinas', component: DisciplinasComponent },
  { path: 'cadastro-disciplinas', component: DisciplinaCadastroComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'detalhes/:data', component: DetalhesDataComponent }, 
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
