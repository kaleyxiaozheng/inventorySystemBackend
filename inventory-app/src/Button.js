import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './Button.css'; // Tell webpack that Button.js uses these styles

export class Button1 extends Component {
  render() {
    // You can use them as regular CSS styles
    return (
        <div >
      <Button>Login</Button>
      <Button>Sign up</Button>
    </div>
    );
  }
}

export class Button2 extends Component {
    render() {
      // You can use them as regular CSS styles
      return <button className="Button2">Hello</button>;
    }
  }