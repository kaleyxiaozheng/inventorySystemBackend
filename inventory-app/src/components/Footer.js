import React, { Component } from 'react';
import '../css/Footer.css';
import adbLogo from '../logo/ADBLogo.png';

export class Footer extends Component {
    render() {
        return (
            <div className="row">
                <div>
                    <img className="adbLogo" src={adbLogo} />
                </div>
                <div className="adbname"> 
                    ADB Company
                </div>
            </div>
        );
    }
}