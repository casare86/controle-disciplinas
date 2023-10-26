import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
  nome: string = 'Fernando Augusto Malavazzi Casare';
  curso: string = 'Especialização em Tecnologia Java';
  instituicao: string = 'Universidade Tecnológica Federal do Paraná - UTFPR'
}
