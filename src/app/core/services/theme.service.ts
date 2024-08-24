import { DOCUMENT } from '@angular/common';
import { Inject, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document:Document) { }
  switchBetweenThemes(theme:string) {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement
    const body = document.body;
    body.classList.toggle('dark-mode');


    if(themeLink)
      themeLink.href = `${theme}.css`
  }
}
