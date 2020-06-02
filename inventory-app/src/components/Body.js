import React, { Component } from 'react';
import '../css/Body.css';
import companyLogo from '../logo/inventoryLogo.png';

// import { LabelButtonRouter } from './Button';

export class Body extends Component {
    render() {
        return (
            <div>
                <div className="body-area">
                    <img className="compLogo" src={companyLogo} />
                                    </div>
               
            </div>
        );
    }
}