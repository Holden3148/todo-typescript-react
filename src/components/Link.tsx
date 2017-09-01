import * as React from 'react';
import { Component, MouseEventHandler } from 'react';

export interface LinkProps {
    active: boolean;
    children: any;
    onClick: () => void;
}

export default class Link extends Component<LinkProps, any> {

    onLinkClicked: MouseEventHandler<any> = (e) => {
        e.preventDefault();
        this.props.onClick();
    }

    render() {
        if (this.props.active) {
            return <span>{this.props.children}</span>;
        }

        return (
            <a href="#" onClick={this.onLinkClicked}>{this.props.children}</a>
        );
    }
}