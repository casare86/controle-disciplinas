import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { NotasComponent } from './notas/notas.component';
import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalCadastroDisciplinaComponent } from './modal-cadastro-disciplina/modal-cadastro-disciplina.component';
import { DetalhesDataComponent } from './detalhes-data/detalhes-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CalendarioComponent,
    DisciplinasComponent,
    NotasComponent,
    DisciplinaCadastroComponent,
    ModalCadastroDisciplinaComponent,
    DetalhesDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
