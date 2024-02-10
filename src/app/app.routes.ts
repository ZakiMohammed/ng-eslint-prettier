import { Routes } from '@angular/router';
import { ShellComponent } from './components/shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((x) => x.HomeComponent),
      },
      {
        path: 'about',
        data: { icon: 'heart-half' },
        loadComponent: () => import('./pages/about/about.component').then((x) => x.AboutComponent),
      },
      {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then((x) => x.NotFoundComponent),
      },
    ],
  },
];
