import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdmComponent } from './adm/adm.component';
import { ProfileComponent } from './profile/profile.component';
import { GerenteComponent } from './gerente/gerente.component';
import { AuthGuard } from './auth.guard';
import { AdmAuthGuard } from './adm-auth.guard';
import { GerenteAuthGuard } from './gerente-auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Login acessível a todos
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Home requer autenticação
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }, // Todos podem acessar o perfil
  { path: 'adm', component: AdmComponent, canActivate: [AdmAuthGuard] }, // Apenas admin pode acessar
  { path: 'gerente', component: GerenteComponent, canActivate: [GerenteAuthGuard] }, // Admin e gerente podem acessar
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para login por padrão
];
