import { Component, HostListener, OnInit, signal } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [SidenavComponent, MainComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenSize = signal<number>(window.innerWidth)
  @HostListener('window:resize', ['$event'])
  resizeScreen() {
    this.screenSize.set(window.innerWidth)
    if (this.screenSize() < 768) 
      this.isLeftSidebarCollapsed.set(true);
  }

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenSize() < 768);
  }

changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

}
