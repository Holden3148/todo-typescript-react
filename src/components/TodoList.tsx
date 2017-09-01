import * as React from 'react';
import { Component } from 'react';
import Todo from './Todo';
import TodoModel from '../models/todo';

export interface TodoListProps {
    todos: Array<TodoModel>;
    onTodoClick: (id: number) => void;
}

export default class TodoList extends Component<TodoListProps, any> {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <Todo key={todo.id} {...todo} onClick={() => this.props.onTodoClick(todo.id)}/>
                ))}
            </ul>
        );
    }
}