import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: string | null = null;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Exemplo básico de login. Substitua por autenticação real.
    if (username === 'admin' && password === 'admin') {
      this.userRole = 'admin';
    } else if (username === 'gerente' && password === 'gerente') {
      this.userRole = 'gerente';
    } else if (username === 'usuario' && password === 'usuario') {
      this.userRole = 'usuario';
    } else {
      return false;
    }
    return true;
  }

  logout(): void {
    this.userRole = null;
    this.router.navigate(['/login']);
  }

  getUserRole(): string | null {
    return this.userRole;
  }

  isLoggedIn(): boolean {
    return this.userRole !== null;
  }
}
