import { Reducer } from 'redux';
import { FilterValue } from '../models/filter';
import { TodoAction, TodoActionTypes, SetVisibilityFilter } from '../actions';

const visibilityFilter = (state: FilterValue = FilterValue.SHOW_ALL, action: TodoAction): FilterValue => {
    switch (action.type) {
        case TodoActionTypes.SET_VISIBILITY_FILTER:
            return (action as SetVisibilityFilter).filter;
        default: 
            return state;
    }
};

export default visibilityFilter as Reducer<FilterValue>;