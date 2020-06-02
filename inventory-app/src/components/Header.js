import React, { Component } from 'react';
import '../css/Header.css';
import { LabelButtonRouter } from './Button';

export class Header extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="App-title">
                        <h3>AIMS</h3>
                    </div>
                    <div className="Access-app">
                        <LabelButtonRouter label="Admin" path="/Admin"></LabelButtonRouter>
                        <LabelButtonRouter label="Sign up" path="/App"></LabelButtonRouter>
                    </div>
                </div>
            </div>
        );
    }
}