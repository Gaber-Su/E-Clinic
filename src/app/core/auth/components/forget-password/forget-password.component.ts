import { Component } from '@angular/core';
import { env } from '../../../../../assets/enviroments/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  // private keycloakUrl = `${env.baseURL}/realms/Test/protocol/openid-connect/auth`;

  constructor(private http: HttpClient) {}

  // forgotPassword() {
  //   // const url = `${this.keycloakUrl}/forgot-password`;
  //   //  this.http.post(url, { username : 'gaber_test' }).subscribe(res => {
  //   //   console.log(res);
      
  //   //  })
  //   let url = env.baseURL+'/admin/realms/Test/users/413c35ee-8931-42d9-8316-ea14d8faf44a/reset-password-email'
  //   // this.http.put(env.baseURL, )
  // }
  private keycloakUrl = `${env.baseURL}/admin/realms/${env.keycloakRealm}/protocol/openid-connect`;


  forgotPassword(email: string) {
    // const url = `${this.keycloakUrl}/login-actions/reset-credentials`;

    // const body = new URLSearchParams();
    // body.set('client_id', env.keycloakClientId);
    // // body.set('redirect_uri', env.redirectUri);
    // body.set('username', email);

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // });

    //  this.http.post(url, body.toString(), { headers }).subscribe(res => {
    //   console.log(res);
      
    //  })
    // let url = `${env.baseURL}/admin/realms/${env.keycloakRealm}/users/413c35ee-8931-42d9-8316-ea14d8faf44a/execute-actions-email&client_id=${env.keycloakClientId}`;
    // // let body = {actions : ['UPDATE_PASSWORD']};
    // let body = {
    //   actions : ['UPDATE_PASSWORD']
    // }

    // let token = localStorage.getItem('access_token');
    // let headers = new HttpHeaders({
    //   'Authorization': `Bearer ` + token, // Corrected the typo and format
    //   'Content-Type': 'application/json'
    // });
    // this.http.put(url, body, {headers}).subscribe(res => {
    //   console.log(res);
      
    // }, (err)=> {
    //   console.log(err);
      
    // })

 
  }
}



