import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  usedLang :WritableSignal<string> = signal('en');
  showPaginatorInAr: boolean = false


  constructor() { }
  
}
