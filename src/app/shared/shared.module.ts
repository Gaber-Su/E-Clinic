import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

const modules = [
  CommonModule,
  TranslateModule
]

@NgModule({
  declarations: [],
  imports: modules,
  exports : modules
})
export class SharedModule { }
