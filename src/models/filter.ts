
export enum FilterValue {
    SHOW_ALL = 'SHOW_ALL',
    SHOW_ACTIVE= 'SHOW_ACTIVE',
    SHOW_COMPLETED = 'SHOW_COMPLETED'
}

export interface Filter {
    filter: FilterValue;
}
