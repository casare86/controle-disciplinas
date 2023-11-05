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
      codigo: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      nome: ['', [Validators.required, Validators.pattern(/^[A-Za-z]{3,}$/)]],
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
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems);
    });
  }

  onSubmit() {
    if (this.disciplinaForm.valid) {
      const disciplina = this.disciplinaForm.value as Disciplina;
      this.disciplinaCadastrada = disciplina;
      const disciplinaValida = validaDisciplina(disciplina);
      if(!disciplinaValida)
        return;
      
        // criar um registro no JSON files para armazenamento.
      console.log("Cadastrada: " + this.disciplinaCadastrada);

      const modal = document.getElementById('cadastroSucessoModal');
    
      console.log(modal);
      M.Modal.init(modal!);
      const instance = M.Modal.getInstance(modal!).open();
    }
  }

  cancel() {
    this.disciplinaForm.reset();
    this.router.navigate(['/disciplinas']);
  }
}
function validaDisciplina(disciplina: Disciplina) {
  console.log("Validacao",  disciplina.codigo < 0 && disciplina.nome.length < 3)
  //separar as validações para código e para nome
  let nomeInvalido = disciplina.nome.length < 3;
  let codigoInvalido = disciplina.codigo < 0;

  let mensagem = "";
  if(disciplina.nome.length < 3)
    mensagem += "Nome deve ter pelo menos 3 letras."
  if(disciplina.codigo < 0)
    mensagem += "Código não pode ser negativo";
  
  let invalida = disciplina.codigo > 0 && disciplina.nome.length > 3;
  return invalida ;
}

