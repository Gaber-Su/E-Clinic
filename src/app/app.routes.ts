import { Routes } from '@angular/router';
import { IndexComponent } from './core/layout/index.component';
import { patientsResolver } from './features/patients/resolver/patients.resolver';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./core/layout/index.component').then((x) => x.IndexComponent),
  // },
  {
    path : 'patients', 
    loadComponent: () => import("./features/patients/components/patients-list/patients-list.component").then(x => x.PatientsListComponent)
    , resolve : {patientsConfig : patientsResolver}
  },
  {
    path : 'staff', 
    loadComponent: () => import("./features/staff/staff-list/staff-list.component").then(x => x.StaffListComponent)
  }
];
