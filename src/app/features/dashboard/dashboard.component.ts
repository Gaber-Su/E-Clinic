import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/http/api.service';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private _apiService : ApiService, private _langServcie : LanguageService) {}
  
ngOnInit(): void {
  // this.GetPosts()
}  
  // GetPosts() {
  //   this._apiService.GetPosts().subscribe(res => {
  //     console.log(res);
      
  //   })
  // }

  login() {
this._langServcie.login()
  }

}
