import React, { Component } from 'react';
import '../css/Header.css';
import { LabelButtonRouter } from './Button';
import invenLogo from '../logo/InvenLogo.png';

export class Header extends Component {
    render() {
        return (
            <div className="headerArea">
                <div className="leftHeader"></div>
                <div className="centreHeader">
                    <div>
                    <img className="invenLogo" src={invenLogo} />
                    </div>
                    <div className="invenTitle">
                        <h3>AIMS</h3>
                    </div>
                </div>
                <div className="rightHeader">
                    <LabelButtonRouter label="Login" path="/Login"></LabelButtonRouter>
                    <LabelButtonRouter label="Sign up" path="/Signup"></LabelButtonRouter>
                </div>
            </div>
        );
    }
}