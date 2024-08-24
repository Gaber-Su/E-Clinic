import { Routes } from '@angular/router';
import { IndexComponent } from './core/layout/index.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./core/layout/index.component').then((x) => x.IndexComponent),
  // },
  {
    path : 'patients', 
    loadComponent: () => import("./features/patients/patients-list/patients-list.component").then(x => x.PatientsListComponent)
  },
  {
    path : 'staff', 
    loadComponent: () => import("./features/staff/staff-list/staff-list.component").then(x => x.StaffListComponent)
  }
];
