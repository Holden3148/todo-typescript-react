import { combineReducers, Reducer } from 'redux';
import todos from './todos';
import TodoModel from '../models/todo';
import { FilterValue } from '../models/filter';
import visibilityFilter from './visibilityFilter';

export interface AppState {
    todos: Array<TodoModel>;
    visibilityFilter: FilterValue;
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp as Reducer<AppState>;