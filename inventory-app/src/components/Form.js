import React, { Component } from 'react';
import '../css/Form.css'; // Tell webpack that Button.js uses these styles

export class Form extends Component {
  render() {
    return (
      <div className="inputForm">
        <form>
          <input type="text" />
        </form>
      </div>

    );
  }
}
