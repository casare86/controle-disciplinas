import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisciplinaService } from '../disciplina.service';

declare var M: any;

@Component({
  selector: 'app-edit-disciplina-modal',
  templateUrl: './edit-disciplina-modal.component.html',
  styleUrls: ['./edit-disciplina-modal.component.less']
})
export class EditDisciplinaModalComponent implements AfterViewInit {
  disciplinaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private disciplinaService: DisciplinaService
  ) {
    this.disciplinaForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.pattern('^([0-9]+)')]],
      nome: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9 ]{3,}$')]],
      dataInicio: [''],
      dataFim: ['']
    });
  }

  ngAfterViewInit() {
    const modal = document.getElementById('edit-disciplina-modal');
    M.Modal.init(modal);
  }

  onSubmit(): void {
    if (this.disciplinaForm.valid) {
      const disciplinaData = this.disciplinaForm.value;
      this.disciplinaService.editarDisciplina(disciplinaData).subscribe(
        (response) => {
          console.log('Disciplina atualizada com sucesso:', response);
        },
        (error) => {
          console.error('Erro ao atualizar disciplina:', error);
        }
      );
    }
  }
}
