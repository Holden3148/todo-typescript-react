import { connect, MapStateToProps, MapDispatchToProps, Dispatch } from 'react-redux';
import { createToggleTodo } from '../actions';
import Todo from '../models/todo';
import { FilterValue } from '../models/filter';
import { AppState } from '../reducers';
import { default as TodoList } from '../components/TodoList';

const getVisibleTodos = (todos: Array<Todo>, filter: FilterValue): Array<Todo> => {
    switch (filter) {
        case FilterValue.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case FilterValue.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case FilterValue.SHOW_ALL:
        default:
            return todos;
    }
};

interface StateFromProps {
    todos: Array<Todo>;
}

interface DispatchFromProps {
    onTodoClick: (id: number) => void;
}

const mapStateToProps: MapStateToProps<StateFromProps, void> = 
    (state: AppState): StateFromProps => {
        return {
            todos: getVisibleTodos(state.todos, state.visibilityFilter)
        };
    };

const mapDispatchToProps: MapDispatchToProps<DispatchFromProps, void> = 
    (dispatch: Dispatch<any>): DispatchFromProps => {
        return {
            onTodoClick: (id: number) => {
                dispatch(createToggleTodo(id));
            }
        };
    };

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
