import React from 'react';
import './App.css';
import './Button.css';
import './Form.css';
import {Login_Signup_Button, Button2} from './Button';
function App() {
  return (
    <div>
      <div className = "row">
        <div className="App-title">
         <h3>Inventory Management</h3>
        </div>
        <div className="Access-app">
          <Login_Signup_Button></Login_Signup_Button>
         </div>
        </div>
      <div className="Input-area">
        
      </div>
    </div>
  );
}

export default App;
