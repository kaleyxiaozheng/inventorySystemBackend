import React, { Component } from 'react';
import '../css/Admin.css';
import {Link} from "react-router-dom";

export class Admin extends Component{
    render(){
        return(
            <div>
                <h3>Admin</h3>
                <Link to="/" >back</Link>
            </div>
        );
    }
}