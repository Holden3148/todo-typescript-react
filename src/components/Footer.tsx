import * as React from 'react';
import { Component } from 'react';
import FilterLink from '../containers/FilterLink';
import { FilterValue } from '../models/filter';

export default class Footer extends Component<any, any> {
    render() {
        return (
            <p>
                Show:
                {' '}
                <FilterLink filter={FilterValue.SHOW_ALL}>
                    All
                </FilterLink>
                {', '}
                <FilterLink filter={FilterValue.SHOW_ACTIVE}>
                    Active
                </FilterLink>
                {', '}
                <FilterLink filter={FilterValue.SHOW_COMPLETED}>
                    Completed
                </FilterLink>
            </p>
        );
    }
}