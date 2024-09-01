import { Injectable } from '@angular/core';
import { env } from '../../../../assets/enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  IAuthResponse } from '../auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenUrl = `${env.baseURL}/realms/Test/protocol/openid-connect/token`;


  constructor(private http: HttpClient) {}
  /**
 * Authenticates the user using Keycloak's password grant type.
 *
 * This method sends a POST request to the keycloak's token endpoint to obtain
 * an access token by exchanging the user's credentials (username and password)
 * along with the client ID and secret.
 *
 * @param {string} username - The username of the user attempting to authenticate.
 * @param {string} password - The password of the user attempting to authenticate.
 * @returns {Observable<any>} - An observable containing the response from the Keycloak server.
 *
 * */

  authenticate(username: string, password: string): Observable<any> {
    const body = new URLSearchParams({
      grant_type: 'password',
      client_id: 'front-client',
      client_secret: '6jMjkZP1DkGcX5fCeDsnmpAJ1tahe1pu',
      username: username,
      password: password
    }).toString();

    return this.http.post<IAuthResponse>(this.tokenUrl, body, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },  
    });
  }
    /**
 * Stores tokens in localStorage dynamically.
 *
 * @param tokens - An object containing token key-value pairs.
 */
  storeTokens(tokens: { [key: string]: string }) {
    Object.keys(tokens).forEach((key) => {
      localStorage.setItem(key, tokens[key]);
    });
  }

}

