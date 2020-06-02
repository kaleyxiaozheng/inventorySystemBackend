import React, { Component } from 'react';
import { Button } from '@material-ui/core';
// import './css/Button.css';
import {
  withRouter
} from 'react-router-dom';

class LabelButton extends Component {
  render() {
    const history = this.props.history;

    return (
    <div >
      <Button onClick={() => history.push(this.props.path)}>{this.props.label}</Button>
    </div>
    );
  }
}

export default withRouter(LabelButton);
