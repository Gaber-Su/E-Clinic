import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, Inject, ViewChild, signal, input, output, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MENU } from '../menu';

type Item = {
  label : string,
  icon: string,
  link : string
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements OnInit {
  isLeftSidebarCollapsed = input<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>()
  items = input<any>(MENU)
//    items:Item[] = [
//   {
//     label : 'Dashboard',
//     icon : 'fa-solid fa-gauge',
//     link : ''
//   },
//   {
//     label : 'Patients',
//     icon : 'fa-solid fa-gauge',
//     link : ''
//   },
//   {
//     label : 'Appointments',
//     icon : 'fa-solid fa-gauge',
//     link : ''
//   }
// ]
ngOnInit(): void {
    // this.items = MENU
}
  toggleSidebar() {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed())
  } 
  closeSidebar() {
    this.changeIsLeftSidebarCollapsed.emit(true)

  }

   hasItems(item: any) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }
  isExpended=true
  expend(item:any){
    item.isExpanded = !item.isExpanded
    // this.isExpended=!this.isExpended
  }

}
