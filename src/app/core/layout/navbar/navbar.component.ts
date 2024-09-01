import { Component, signal, } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ThemeService } from '../../services/theme.service';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { flatMap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from '../../../shared/shared.module';
import { LanguageService } from '../../services/language.service';
import { PrimeNGConfig } from 'primeng/api';
import { translationsPrimeNgTable } from '../../../../assets/i18n/translation.prime-ng-table';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
// import {  translationsPrimeNgTable } from '../../../shared/models/translation.primeng-table';





@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule, InputTextModule, TableModule, ToggleButtonModule, FormsModule , ReactiveFormsModule, CommonModule, DropdownModule, SharedModule, KeycloakAngularModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  langs = [
    {name : 'en',

    },
    { name : 'ar' }
  ]
  selectedLang = this.langs[0]
  
  checked = false
  products=[
    { code : 1, name : 'test', category:'categories', quantity:'1' },
    { code : 1, name : 'test', category:'categories', quantity:'1' },
    { code : 1, name : 'test', category:'categories', quantity:'1' },
    { code : 1, name : 'test', category:'categories', quantity:'1' },

 
  ]
  constructor (private _keyCloackService : KeycloakService, private _themeService:ThemeService, public _translateService : TranslateService, private _langService: LanguageService, private _primeConfig : PrimeNGConfig) {
    console.log(this.selectedLang.name);
    
  }
  changeTheme(id:string){
    this._themeService.switchBetweenThemes(id)
  }
 



  switch(){
    console.log(this.checked);
    if (this.checked) 
    this._themeService.switchBetweenThemes('arya-blue')
    else 
    this._themeService.switchBetweenThemes('lara-light-blue')
    
  }
  translate() {

    this._translateService.use(this.selectedLang.name);
    this._langService.usedLang.set(this.selectedLang.name)
    console.log(this._langService.usedLang());
    this._langService.showPaginatorInAr = this._langService.usedLang() === 'ar' ? true : false
    /** ---- change prime ng config for table ---- */
    const lang = this._langService.usedLang();
    this._primeConfig.setTranslation(translationsPrimeNgTable[lang])
    /** ---- change prime ng config for table ---- */

   


    /** --- change direction body */
    if(this.selectedLang.name == 'ar') {
      document.dir = 'rtl'
    } else {
      document.dir = 'ltr'
    }

  }
  
  // logOut() {
  // }

}



