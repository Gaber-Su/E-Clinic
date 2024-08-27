import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { ActivatedRoute } from '@angular/router';
import { PatientsModule } from '../../patients.module';
import { PatientsModel } from '../../models/patients-model';

@Component({
  selector: 'app-patients-list',
  standalone: true,
  imports: [TableModule, TableComponent],
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.scss'
})
export class PatientsListComponent implements OnInit {
  patientsTableConfig!:PatientsModel
  constructor (private activatedRoute: ActivatedRoute) {}
  patients = [
    {
     name : 'gaber',
     code : 'code 1',
     pr : 100,
    //  actions : 'action 1', 
    }
  ]

  ngOnInit(): void {
    this.patientsTableConfig = new PatientsModel({Get : '', Activate : '', Deactiveted : '', Delete : ''})
    // To Do ... 
    // Call here end point to get list (send request this.patientsTableConfig.apiUrls.Get ) and receive data  
    console.log(this.patientsTableConfig.apiUrls);
  }



}
