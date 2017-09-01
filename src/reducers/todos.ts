import { Reducer } from 'redux';
import TodoModel from '../models/todo';
import { TodoAction, AddTodo, ToggleTodo, TodoActionTypes } from '../actions';

export const todos = (state: Array<TodoModel> = [], action: TodoAction): Array<TodoModel> => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            const {id, text} = action as AddTodo;
            return [ ...state, { id, text, completed: false }];
        case TodoActionTypes.TOGGLE_TODO:
            return state.map(todo => 
                ( todo.id === (action as ToggleTodo).id ) 
                ? { ...todo, completed: !todo.completed} 
                : todo
        );
        default:
            return state;
    }
};

export default todos as Reducer<Array<TodoModel>>;