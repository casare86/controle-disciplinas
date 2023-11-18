import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Disciplina } from '../models/disciplina.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.less']
})

export class DisciplinaCadastroComponent implements OnInit{
  @Output() teste  = Disciplina;
  
  disciplinaForm: FormGroup ;
  @Output() disciplinaCadastrada!: Disciplina;

  constructor(private fb: FormBuilder, private router: Router) {
    this.disciplinaForm = this.fb.group({
      id: [''],
      nome: [''],
      dataInicio: [''],
      dataFim: ['']
    });
    this.disciplinaCadastrada = new Disciplina(0, "", "", "");
  }

  ngOnInit() {
    this.disciplinaForm = this.fb.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      dataInicio: [''],
      dataFim: ['']
    });
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems);
    });
  }

  onSubmit() {
    if (this.disciplinaForm.valid) {
      const disciplina = this.disciplinaForm.value as Disciplina;
      this.disciplinaCadastrada = disciplina;

      fetch('http://localhost:3000/disciplinas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(disciplina),
      })
        .then(response => response.json())
        .then(data => {
          this.disciplinaCadastrada = data;
          const modal = document.getElementById('cadastroSucessoModal');
          M.Modal.init(modal!);
          const instance = M.Modal.getInstance(modal!).open();
          console.log('Cadastro realizado com sucesso:', data);
        })
        .catch(error => {
          console.error('Erro ao cadastrar disciplina:', error);
        });
    }
  }

  cancel() {
    this.disciplinaForm.reset();
    this.router.navigate(['/disciplinas']);
  }
}
