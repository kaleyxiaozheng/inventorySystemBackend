import React, { Component } from 'react';
import '../css/Body.css';
import clientLogo from '../logo/ClientLogo.png';

export class Body extends Component {
    render() {
        return (
            <div className="bodyArea">
                <img className="clientLogo" src={clientLogo} />
            </div>
        );
    }
}
