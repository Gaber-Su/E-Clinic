import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../assets/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient : HttpClient) { }

  GetPosts() {
  return this._httpClient.get(`${env.apiRoot}/posts`)
  }
}
