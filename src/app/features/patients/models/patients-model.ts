import { IApiUrls, IGenericTable, ITableColumn } from "../../../shared/models/table-prime-ng-interface";

export class PatientsModel implements IGenericTable {
cols:ITableColumn[] = [
    {header : 'Name', field: 'name', visible : true},
    {header : 'Code', field: 'code', visible : true},
    {header : 'Price', field: 'pr', visible : true},
    {header : 'Actions', field: 'actions', visible : true},

];
data = [];
apiUrls: Partial<IApiUrls> = {};

constructor (apiUrls:{}) {
    this.apiUrls = apiUrls;
}
}

