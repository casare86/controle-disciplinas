import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-data',
  templateUrl: './detalhes-data.component.html',
  styleUrls: ['./detalhes-data.component.less']
})
export class DetalhesDataComponent {

  dataSelecionada!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dataSelecionada = params.get('data') as string;
    });
  }

}
