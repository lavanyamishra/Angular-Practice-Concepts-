import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { NoData } from './components/no-data/no-data';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard, title: 'Home', canActivate:[authGuard] },
  { path: 'about', component: About, title: 'Contact' },
  { path: 'contact', component: Contact, title: 'About' },
  { path: 'login', component: Login, title: 'login'},
  { path: '**', component: NoData },
];
