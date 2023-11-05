import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Disciplina } from '../models/disciplina.model';

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.less']
})

export class DisciplinaCadastroComponent implements OnInit{
  @Output() teste  = Disciplina;
  
  disciplinaForm: FormGroup ;
  @Output() disciplinaCadastrada!: Disciplina;

  constructor(private fb: FormBuilder) {
    this.disciplinaForm = this.fb.group({
      codigo: ['', Validators.required],
      nome: ['', Validators.required],
      dataInicio: [''],
      dataFim: ['']
    });
    this.disciplinaCadastrada = new Disciplina(0, "");
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
      this.disciplinaCadastrada = disciplina;
      // criar um registro no JSON files para armazenamento.
      console.log("Cadastrada: " + this.disciplinaCadastrada);

      const modal = document.getElementById('cadastroSucessoModal');
    
      console.log(modal);
      M.Modal.init(modal!);
      const instance = M.Modal.getInstance(modal!).open();
    }
  }
}
