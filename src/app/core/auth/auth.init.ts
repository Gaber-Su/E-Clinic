import { KeycloakService } from 'keycloak-angular';
import { env } from '../../../assets/enviroments/enviroment';
import Keycloak from 'keycloak-js';


export function initializeKeycloak(keycloak: KeycloakService)  {
    debugger;
  return () =>
    keycloak.init({
      config: {
        url: env.baseURL,
        realm: 'Test',
        clientId: 'front-client'
        
      },
      initOptions: {
        onLoad: 'login-required',
        // token : 
        // adapter : 'cordova',
        // checkLoginIframe: true,
        // flow:'standard',
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

