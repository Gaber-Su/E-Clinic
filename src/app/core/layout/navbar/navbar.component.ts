import { Component } from '@angular/core';
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





@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule, InputTextModule, TableModule, ToggleButtonModule, FormsModule , ReactiveFormsModule, CommonModule, DropdownModule, SharedModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
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
  constructor (private _themeService:ThemeService, public _translateService : TranslateService) {
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

  testSwitch(event:any) {
    console.log(event.target.value);
    
  }
  translate() {
    this._translateService.use(this.selectedLang.name);
    localStorage.setItem('current-lang', this.selectedLang.name)
    if(this.selectedLang.name == 'ar') {
      document.dir = 'rtl'
    } else {
      document.dir = 'ltr'
    }

  }
  

}
