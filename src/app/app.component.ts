import { Component, ViewEncapsulation, Inject, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from "./core/layout/index.component";
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { LanguageService } from './core/services/language.service';

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
  constructor (private _translateService:TranslateService, private _primeConfig:PrimeNGConfig, private _langService: LanguageService) {}
  
  ngOnInit(): void {
    // this._translateService.setDefaultLang('en');
    // const currentLang = localStorage.getItem('current-lang') || 'en';
    // this._translateService.use(currentLang);
   
 
    

    /** ---- testing ---- */
    // this._translateService.use('ar'); // Use 'ar' for Arabic

    // this._translateService.get('primeng').subscribe(res => {
    //   // this._primeConfig.setTranslation(res)
    //   console.log(res);
    //   // this._primeConfig.setTranslation(res)
    //   console.log("🚀 ~ AppComponent ~ this._translateService.get ~ this._primeConfig:", this._primeConfig)
      
      
    // })
  }
}



