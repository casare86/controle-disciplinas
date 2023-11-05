import { Component, AfterViewInit } from '@angular/core';
import 'materialize-css';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit() {
    const elem = document.querySelector('.sidenav');
    if (elem) {
      const options = {};
      M.Sidenav.init(elem, options);
    }
  }

  // Função para abrir e fechar o menu mobile (sidenav)
  toggleMobileMenu() {
    const sidenav = document.querySelector('.sidenav');
    const sidenavInstance = M.Sidenav.getInstance(sidenav!);

    if (sidenavInstance) {
      sidenavInstance.isOpen ? sidenavInstance.close() : sidenavInstance.open();
    }
  }

}