import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-patients-list',
  standalone: true,
  imports: [TableModule],
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.scss'
})
export class PatientsListComponent {
  customers = [
    {name: 'Gaber', country : 'Egypt', company : 'Techno-island', representative : 'test'},
    {name: 'Gaber', country : 'Egypt', company : 'Techno-island', representative : 'test'},
    {name: 'Gaber', country : 'Egypt', company : 'Techno-island', representative : 'test'},
    {name: 'Gaber', country : 'Egypt', company : 'Techno-island', representative : 'test'},
    {name: 'Gaber', country : 'Egypt', company : 'Techno-island', representative : 'test'},
    {name: 'Gaber', country : 'Egypt', company : 'Techno-island', representative : 'test'},
    {name: 'Gaber', country : 'Egypt', company : 'Techno-island', representative : 'test'},
    {name: 'Gaber', country : 'Egypt', company : 'Techno-island', representative : 'test'},
    {name: 'Gaber', country : 'Egypt', company : 'Techno-island', representative : 'test'},
    {name: 'Gaber', country : 'Egypt', company : 'Techno-island', representative : 'test'},
    {name: 'Gaber', country : 'Egypt', company : 'Techno-island', representative : 'test'},
    {name: 'Gaber', country : 'Egypt', company : 'Techno-island', representative : 'test'},
    {name: 'Gaber', country : 'Egypt', company : 'Techno-island', representative : 'test'},
    {name: 'Gaber', country : 'Egypt', company : 'Techno-island', representative : 'test'},
    {name: 'Gaber', country : 'Egypt', company : 'Techno-island', representative : 'test'},


  ]

}
