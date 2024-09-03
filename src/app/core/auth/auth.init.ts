import { KeycloakService } from 'keycloak-angular';
import { env } from '../../../assets/enviroments/enviroment';
import Keycloak from 'keycloak-js';


export  function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: `${env.baseURL}`,
        realm: 'Test',
        clientId: 'front-end-angular',
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
      bearerExcludedUrls: ['/assets'],
      initOptions: {
        redirectUri: 'http://localhost:4200/Dashboard',


        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
        window.location.origin + '/assets/silent-check-sso.html',
      },
    });
    
}


// export function loginWithPassword(username: string, password: string) {
//   const keycloak = new Keycloak({
//     url: env.baseURL,
//     realm: 'Test',
//     clientId: 'Front_End_Client',
//   });

//   return keycloak.init({ onLoad: 'login-required' }).then(() => {
//     return keycloak.login({
//       grantType: 'password',
//       username: username,
//       password: password,
//     });
//   });
// }

