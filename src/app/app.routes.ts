import { Routes } from '@angular/router';
import { IndexComponent } from './core/layout/index.component';
import { patientsResolver } from './features/patients/resolver/patients.resolver';
import { AuthGuard, } from './core/auth/guards/auth.guard';
import { TestComponent } from './shared/components/test/test.component';

export const routes: Routes = [

  {
    path : '' , 
    loadComponent : () => import('./core/auth/components/login/login.component').then((l)=>l.LoginComponent ),  
    // canActivate : [AuthGuard],
    // data: { roles:  [
    //     "view-realm",
    //     "view-identity-providers",
    //     "manage-identity-providers",
    //     "impersonation",
    //     "realm-admin",
    //     "create-client",
    //     "manage-users",
    //     "query-realms",
    //     "view-authorization",
    //     "query-clients",
    //     "query-users",
    //     "manage-events",
    //     "manage-realm",
    //     "view-events",
    //     "view-users",
    //     "view-clients",
    //     "manage-authorization",
    //     "manage-clients",
    //     "query-groups"
    //   ]},
  },
  //   {
  //   path : '' , 
  //   loadComponent : () => import('./core/auth/components/forget-password/forget-password.component').then((l)=>l.ForgetPasswordComponent ),   
  //   // canActivate : [AuthGuard] ,
  //   data : ['']
  // },
  // { path: '**', redirectTo: '' },
  // {
  //   path: '',
  //  loadComponent : () => import('./features/dashboard/dashboard.component').then(d => d.DashboardComponent),
  //  canActivate : [AuthGuard],
  // },
  {
    path : 'index',
    loadComponent: ()=> import ('./core/layout/index.component').then(i => i.IndexComponent),
    children : [
      {
        path: 'Dashboard',
       loadComponent : () => import('./features/dashboard/dashboard.component').then(d => d.DashboardComponent),
  
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
