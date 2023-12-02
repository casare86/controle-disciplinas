import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private username: string = '';
  
  constructor(private router: Router) {}
  
  login(username: string, password: string): boolean {
    if (username === 'fernando' && password === '123') {
      this.loggedIn = true;
      this.username = username;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    this.username = '';
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getUsername(): string {
    return this.username;
  }
}
