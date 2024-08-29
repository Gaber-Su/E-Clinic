import { Injectable, signal, WritableSignal } from '@angular/core';
import { env } from '../../../assets/enviroments/enviroment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  usedLang :WritableSignal<string> = signal('en');
  showPaginatorInAr: boolean = false



  
  private tokenUrl = `${env.baseURL}/realms/Test/protocol/openid-connect/token`;

  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string) {
    const body = new URLSearchParams({
      grant_type: 'password',
      client_id: 'front-client',
      client_secret: 'aXccsyUo4MjVFLDT8Q3NSegyRz9m0QIW',
      username: username,
      password: password
    }).toString();

    return this.http.post(this.tokenUrl, body, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  login() {
    this.authenticate('gaber_sultan', 'gaber123456').subscribe({
      next: (response: any) => {
        console.log('Login successful', response);
        // localStorage.setItem('access_token', response.access_token);
        // localStorage.setItem('refresh_token', response.refresh_token);
        // localStorage.setItem('id_token', response.id_token);
        // You can navigate to the dashboard or protected routes
      },
      error: (error) => {
        console.error('Login failed', error);
        // Handle login error (e.g., display an error message)
      },
    });
  }
}
