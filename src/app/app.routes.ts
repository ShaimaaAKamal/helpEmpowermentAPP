import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
];
