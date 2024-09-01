import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../core/http/api.service';
import { LanguageService } from '../../core/services/language.service';
import { KeycloakService } from 'keycloak-angular';
import { env } from '../../../assets/enviroments/enviroment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  http:HttpClient

  constructor(private _apiService : ApiService, private _langServcie : LanguageService, private _keyCloackService : KeycloakService, ) {
    this.http = inject(HttpClient)
  }
  
ngOnInit(): void {
  
}  


  login() {
this._langServcie.login()
  }

  getUsers() {
    let url =env.apiUrlKeyClock + '/Test/users'
    this.http.get(url, {headers : {
      'authorization': 'Bearer ' +localStorage.getItem('access_token')
    }}).subscribe(res => {
    console.log("🚀 ~ ForgetPasswordComponent ~ forgotPassword ~ res:", res)

    }
  )
  }

}
