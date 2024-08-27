import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SharedModule } from '../../shared.module';
import { ButtonModule } from 'primeng/button';
import { IGenericTable } from '../../models/table-prime-ng-interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule, SharedModule, ButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent  implements OnInit {
//   _showPagination = false
  
//  @Input() 
// set showPagination(value:boolean) {
//   this._showPagination = value
// }
  tableConfig = input.required<any>();
  data = input<any[]>([])
  ngOnInit(): void {
    
  }
  deleteRow(row:any){
console.log(this.tableConfig());

    
  }
}
