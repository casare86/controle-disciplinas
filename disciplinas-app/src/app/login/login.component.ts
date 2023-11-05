import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'fernando' && this.password === '123') {
      this.router.navigate(['/disciplinas']); 
    } else {
      this.cancel;
    }
  }

  cancel() {
    this.username = ''; 
    this.password = ''; 
    this.router.navigate(['/']);
  }
}
