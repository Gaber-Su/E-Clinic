import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, CommonModule, NavbarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
isCollapsed = input.required<boolean>() 
sizeScreen = input.required<number>(); 

sizeClass = computed(()=> {
   const isLeftSidebarCollapsed = this.isCollapsed();
    if (isLeftSidebarCollapsed) {
      return '';
    }
    return this.sizeScreen() > 768 ? 'body-trimmed' : 'body-md-screen';
})
}
