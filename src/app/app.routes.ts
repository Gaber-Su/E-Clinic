import { Routes } from '@angular/router';
import { IndexComponent } from './core/layout/index.component';
import { patientsResolver } from './features/patients/resolver/patients.resolver';
import { authGuard } from './core/auth/guards/auth.guard';

export const routes: Routes = [
  {
    path : '' , 
    loadComponent : () => import('./core/auth/components/login/login.component').then((l)=>l.LoginComponent )
  },
  {
    path : 'index',
    canActivate : [authGuard],
    loadComponent: ()=> import ('./core/layout/index.component').then(i => i.IndexComponent),
    children : [
      {
        path: 'Dashboard',
       loadComponent : () => import('./features/dashboard/dashboard.component').then(d => d.DashboardComponent)
      },
      {
        path : 'patients', 
        loadComponent: () => import("./features/patients/components/patients-list/patients-list.component").then(x => x.PatientsListComponent)
        , resolve : {patientsConfig : patientsResolver}
      },
      {
        path : 'staff', 
        loadComponent: () => import("./features/staff/staff-list/staff-list.component").then(x => x.StaffListComponent)
      }
    ]
  },

];
