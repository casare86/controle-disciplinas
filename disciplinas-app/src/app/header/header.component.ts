import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  titulo: string = "Meu Aplicativo de Acompanhamento de Disciplinas";
  destaque: boolean = true; 

  toggleDestaque() {
    this.destaque = !this.destaque; 
  }

}
