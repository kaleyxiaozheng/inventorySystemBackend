import React, { Component } from 'react';
import '../css/Login.css';
import { Link } from "react-router-dom";
import { Form } from "./Form";
import { LabelTitle } from "./Label";

export class Login extends Component {
    render() {
        return (
            <div className="adminArea">
                <div className="adminTop"></div>
                <div className="adminBorder">
                    <div className="adminTitle">
                        <h2>Sign in</h2>
                    </div>
                    <div className="infoLabel">
                        <LabelTitle label="Email Address"></LabelTitle>
                    </div>
                    <div className="formLabel">
                        <Form></Form>
                    </div>
                    <div className="infoLabel">
                        <LabelTitle label="Password"></LabelTitle>
                    </div>
                    <div className="formLabel">
                        <Form></Form>
                    </div>
                </div>
                <div className="adminBottom"></div>
                {/* <Link to="/" >back</Link> */}
            </div>
        );
    }
}