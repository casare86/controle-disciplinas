import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.less']
})
export class CalendarioComponent implements OnInit {

  dataSelecionada : string;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.dataSelecionada = this.route.snapshot.params['data'];
  }


  ngOnInit(): void {
    this.inicializarCalendario();
  }

  inicializarCalendario() {
    moment.locale('pt-br');
   
    const datePickerOptions = {
      format: 'dd mmmm yyyy', 
      i18n: {
        cancel: 'Cancelar',
        clear: 'Limpar',
        done: 'Ok',
      },
      onSelect: (data: any) => {
        const dataFormatada = moment(data).format('YYYY-MM-DD');
        this.router.navigate(['detalhes', dataFormatada]);
      }
    };

    const datePickerElement = document.querySelector('.datepicker')!;
    M.Datepicker.init(datePickerElement, datePickerOptions);
  }

}
