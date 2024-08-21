import { Routes } from '@angular/router';
import { IndexComponent } from './core/layout/index.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/index.component').then((x) => x.IndexComponent),
  },
];
