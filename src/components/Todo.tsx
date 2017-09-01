import * as React from 'react';
import { Component } from 'react';
import TodoModel from '../models/todo';

export interface TodoProps extends TodoModel {
    onClick: () => void;
}

export default class Todo extends Component<TodoProps, any> {
    render() {
        const itemStyle = {
            textDecoration: this.props.completed ? 'line-through' : 'none'
        };
        return (
            <li
                onClick={this.props.onClick}
                style={itemStyle}
            >
            {this.props.text}
            </li>
        );
    }
}