import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Disciplina } from '../models/disciplina.model';

@Component({
  selector: 'app-modal-cadastro-disciplina',
  templateUrl: './modal-cadastro-disciplina.component.html',
  styleUrls: ['./modal-cadastro-disciplina.component.less']
})

export class ModalCadastroDisciplinaComponent {
  @Input()  receptor: Disciplina | undefined;


  closeModal() {
    const modal = document.getElementById('cadastroSucessoModal');
    const instance = M.Modal.getInstance(modal!);
    instance.close();
  }
}
