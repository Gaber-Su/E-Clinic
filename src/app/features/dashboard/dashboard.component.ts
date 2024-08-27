import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/http/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private _apiService : ApiService) {}
  
ngOnInit(): void {
  this.GetPosts()
}  
  GetPosts() {
    this._apiService.GetPosts().subscribe(res => {
      console.log(res);
      
    })
  }

}
