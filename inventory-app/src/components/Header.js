import React, { Component } from 'react';
import '../css/Header.css';
import { LabelButtonRouter } from './Button';

export class Header extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="App-title">
                        <h3>Inventory Management</h3>
                    </div>
                    <div className="Access-app">
                        <LabelButtonRouter label={this.props.label} path={`/${this.props.label}`}></LabelButtonRouter>
                        <LabelButtonRouter label={this.props.label} path={`/${this.props.label}`}></LabelButtonRouter>
                    </div>
                </div>
            </div>
        );
    }
}