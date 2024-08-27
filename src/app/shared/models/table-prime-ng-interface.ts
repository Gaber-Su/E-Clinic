
export interface IGenericTable {
    cols: ITableColumn[],
    data: any,
    apiUrls: IApiUrls
}

export interface ITableColumn {
    header: string,
    field: string,
    visible: boolean
}



export interface IApiUrls {
    Get?: string;
    Activate?: string;
    Deactivate?: string;
    Delete?: string;
}

