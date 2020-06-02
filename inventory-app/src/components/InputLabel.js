import React, { Component } from 'react';
import './css/InputLabel.css'; // Tell webpack that Button.js uses these styles

export class InputLabel extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  myChangeHandler = (event) => {
    let emailaddress = event.target.email;
    let passd = event.target.password;
    this.setState({[emailaddress]:[passd]});
  }
  render() {
    return (
      <form>
      <p>Enter your name:</p>
      <input
        type='text'
        name='useremail'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='userpassword'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <input type='submit' />
      </form>
    );
  }
}
