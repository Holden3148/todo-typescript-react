import * as React from 'react';
import { Component, FormEventHandler } from 'react';

export interface TextFieldWithButtonProps {
    buttonText: string;
    onSubmit: (input: string) => void;
}

export default class TextFieldWithButton extends Component<TextFieldWithButtonProps, any> {
    public refs: {
        textInput: HTMLInputElement
    };
    onSubmitClicked: FormEventHandler<any> = (e) => {
        e.preventDefault();
        if (this.refs.textInput && this.refs.textInput.value.trim()) {
            this.props.onSubmit(this.refs.textInput.value);
            this.refs.textInput.value = '';
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitClicked}>
                    <input ref="textInput"/>
                    <button type="submit">{this.props.buttonText}</button>
                </form>
            </div>
        );
    }
}