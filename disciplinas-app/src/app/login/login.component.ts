import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  loginErrorMessage: string = '';
  loginError = false;

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    this.loginError = !this.authService.login(this.username, this.password);
    if (!this.loginError) {
      localStorage.setItem('user', JSON.stringify({ username: this.username, pwd:this.password, loggedIn: true }));
      this.loginErrorMessage = '';
      this.router.navigate(['/disciplinas']); 
    }
   else {
      this.cancel();
    }
  }

  cancel() {
    this.loginErrorMessage = 'Usuário ou senha incorretos';      
    this.username = ''; 
    this.password = ''; 
    this.router.navigate(['/']);
  }
}
