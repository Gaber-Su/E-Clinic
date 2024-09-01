// // // import { CanActivateFn, Router } from '@angular/router';


// // // export const authGuard: CanActivateFn = (route, state) => {
// // //   let token = localStorage.getItem('access_token');
// // //   let router = new Router();
// // //   if (token) {
// // //     return true
// // //   }
// // //   else {
// // //     router.navigate([''])
// // //     return false
// // //   }

// // // };

// // import { Injectable } from '@angular/core';
// // import {
// //   ActivatedRouteSnapshot,
// //   Router,
// //   RouterStateSnapshot,
// // } from '@angular/router';
// // import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

// // @Injectable({
// //   providedIn: 'root',
// // })
// // export class AuthGuard extends KeycloakAuthGuard {
// //   constructor(
// //     protected override readonly router: Router,
// //     protected readonly keycloak: KeycloakService
// //   ) {
// //     super(router, keycloak);
// //   }

// //   public async isAccessAllowed(
// //     route: ActivatedRouteSnapshot,
// //     state: RouterStateSnapshot
// //   ) {
// //     // Force the user to log in if currently unauthenticated.
// //     if (!this.authenticated) {
// //       console.log('this guard is already authenticated');
      
// //       await this.keycloak.login({
// //         redirectUri: window.location.origin + state.url,
// //       });
// //     }
// //     // Get the roles required from the route.
// //     const requiredRoles = route.data['roles'];
// //     // Allow the user to proceed if no additional roles are required to access the route.
// //     if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
      
      
// //       return true;
// //     }
// //     // Allow the user to proceed if all the required roles are present.
// //     return requiredRoles.every((role) => this.roles.includes(role));
// //   }
// // }


// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   Router,
//   RouterStateSnapshot,
// } from '@angular/router';
// import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard extends KeycloakAuthGuard {
//   constructor(
//     protected override readonly router: Router,
//     protected readonly keycloak: KeycloakService
//   ) {
//     super(router, keycloak);
//   }

//   public async isAccessAllowed(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Promise<boolean> {
//     // Redirect to login if the user is not authenticated
//     if (!this.authenticated) {
//       console.log();
      
//       await this.keycloak.login({
//         redirectUri: window.location.origin + state.url,
//       });
//       return false; // Return false because the user is being redirected
//     }
//     // return true

//     // Check for required roles in the route data
//     const requiredRoles = route.data['roles'];
//     console.log("🚀 ~ AuthGuard ~ requiredRoles:", requiredRoles)

//     // If no roles are required, grant access
//     if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
//       console.log('i am here ................');
      
//       return true;
//     }

//     // Check if the user has the required roles
//     const hasRequiredRoles = requiredRoles.every((role) =>
//       this.roles.includes(role) || 
//       this.keycloak.getUserRoles('realm-management').includes(role) // Adjust this line to target the right resource
//     );

//     // If user doesn't have the required roles, you might want to redirect or show an error
//     if (!hasRequiredRoles) {
//       console.log('i am here  .... .too');
      
//       this.router.navigate(['']); // Example redirection
//       return true;
//     }

//     return hasRequiredRoles; // Grant access if the user has the required roles
//   }
// }

// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
// import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard extends KeycloakAuthGuard {
//   constructor(
//     protected override readonly router: Router,
//     protected readonly keycloak: KeycloakService
//   ) {
//     super(router, keycloak);
//     console.log(' i am using auth guard');
    
//   }

//   public async isAccessAllowed(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Promise<boolean> {
//     // Redirect to login if the user is not authenticated
//     if (!this.authenticated) {
//       await this.keycloak.login({
//         redirectUri: window.location.origin + state.url,
//       });
//       return false; // Return false because the user is being redirected
//     }

//     // Check for required roles in the route data
//     const requiredRoles = route.data['roles'];

//     if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
//       return true; // No roles required, grant access
//     }

//     // Decode the JWT token
//     const token = this.keycloak.getKeycloakInstance().token;
//     if (!token) {
//       this.router.navigate(['']);
//       return false;
//     }

//     const payload = JSON.parse(atob(token.split('.')[1]));

//     // Extract roles from the 'realm-management' resource
//     const resourceRoles = payload?.resource_access?.['realm-management']?.roles || [];

//     // Check if the user has the required roles
//     const hasRequiredRoles = requiredRoles.every((role) => resourceRoles.includes(role));

//     if (!hasRequiredRoles) {
//       this.router.navigate(['']); // Example redirection if roles do not match
//       return false;
//     }

//     return true; // Grant access if the user has the required roles
//   }
// }


/** ------------------------------------------------------------------------------ */
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard extends KeycloakAuthGuard {
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    // Force the user to log in if currently unauthenticated.
    if (!this.authenticated) {
      console.log(state);
      
      // debugger;
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }
    // debugger;
    // Get the roles required from the route.
    const requiredRoles = route.data['roles'];
    // debugger;
    // Allow the user to proceed if no additional roles are required to access the route.
    if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
      // debugger;
      return true;
    }
    // Allow the user to proceed if all the required roles are present.
    return requiredRoles.every((role) => this.roles.includes(role));
  }
}
