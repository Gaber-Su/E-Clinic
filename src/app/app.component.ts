import { Component, ViewEncapsulation, Inject, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from "./core/layout/index.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'e-clinic';
  constructor (private _translateService:TranslateService) {}
  
  ngOnInit(): void {
    // this._translateService.setDefaultLang('en');
    const currentLang = localStorage.getItem('current-lang') || 'en';
    this._translateService.use(currentLang);
    if(currentLang == 'ar') {
      // document.dir = 'rtl'
    }
    // this._translateService.use('en');
  }
}
