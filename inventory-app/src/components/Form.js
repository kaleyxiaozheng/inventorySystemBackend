import React, { Component } from 'react';
import '../css/Form.css'; // Tell webpack that Button.js uses these styles

export class Form extends Component {
  render() {
    return (
      <form>
        <h2>Email address</h2>
        <input type="text"/>
      </form>
    );
  }
}
