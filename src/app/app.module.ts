import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalCadastroDisciplinaComponent } from './modal-cadastro-disciplina/modal-cadastro-disciplina.component';
import { DetalhesDataComponent } from './detalhes-data/detalhes-data.component';
import { DisciplinasListaComponent } from './disciplinas-lista/disciplinas-lista.component';
import { LoginComponent } from './login/login.component';
import { EditDisciplinaModalComponent } from './edit-disciplina-modal/edit-disciplina-modal.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CalendarioComponent,
    DisciplinasComponent,
    DisciplinaCadastroComponent,
    ModalCadastroDisciplinaComponent,
    DetalhesDataComponent,
    DisciplinasListaComponent,
    LoginComponent,
    EditDisciplinaModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskDirective
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
