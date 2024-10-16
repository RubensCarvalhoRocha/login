import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router, private authService: AuthService) {}

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  isAdmin(): boolean {
    return this.authService.getRole() === 'admin';
  }

  isGerenteOrAdmin(): boolean {
    const role = this.authService.getRole();
    return role === 'admin' || role === 'gerente';
  }

  logout() {
    this.authService.logout();
  }

}
