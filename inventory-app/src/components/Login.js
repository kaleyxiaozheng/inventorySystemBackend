import React, { Component } from 'react';
import '../css/Login.css';
import {Link} from "react-router-dom";

export class Login extends Component{
    render(){
        return(
            <div className="adminArea">
                <h3>Login</h3>
                <Link to="/" >back</Link>
            </div>
        );
    }
}