import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Disciplina } from '../models/disciplina.model';

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.less']
})
export class DisciplinaCadastroComponent implements OnInit{
  disciplinaForm: FormGroup ;

  constructor(private fb: FormBuilder) {
    this.disciplinaForm = this.fb.group({
      codigo: ['', Validators.required],
      nome: ['', Validators.required],
      dataInicio: [''],
      dataFim: ['']
    });
  }

  ngOnInit() {
    this.disciplinaForm = this.fb.group({
      codigo: ['', Validators.required],
      nome: ['', Validators.required],
      dataInicio: [''],
      dataFim: ['']
    });
  }

  onSubmit() {
    if (this.disciplinaForm.valid) {
      const disciplina = this.disciplinaForm.value as Disciplina;
      // Faça algo com a disciplina (por exemplo, envie para um serviço).
    }
  }
}
