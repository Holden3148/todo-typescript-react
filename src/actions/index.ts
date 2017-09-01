import { Action, ActionCreator } from 'redux';
import { Filter } from '../models/filter';

export enum TodoActionTypes {
    ADD_TODO = 'ADD_TODO',
    SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER',
    TOGGLE_TODO = 'TOGGLE_TODO'
}

export type TodoAction = AddTodo | SetVisibilityFilter | ToggleTodo;

export interface AddTodo extends Action {
    id: number;
    text: string;
}

export interface SetVisibilityFilter extends Action, Filter {}

export interface ToggleTodo extends Action {
    id: number;
}

let nextTodoId: number = 0;

export const createAddTodo: ActionCreator<AddTodo> = text => {
    return {
        type: TodoActionTypes.ADD_TODO,
        id: nextTodoId++,
        text
    };
};

export const createSetVisibilityFilter: ActionCreator<SetVisibilityFilter> = filter => {
    return {
        type: TodoActionTypes.SET_VISIBILITY_FILTER,
        filter
    };
};

export const createToggleTodo: ActionCreator<ToggleTodo> = id => {
    return {
        type: TodoActionTypes.TOGGLE_TODO,
        id
    };
};