import React from 'react';
import './App.css';
import './Button.css';
import './Form.css';
import {Button1, Button2} from './Button';
function App() {
  return (
    <div>
      <div className = "row">
        <div className="App-title">
         <h3>Inventory Management</h3>
        </div>
        <div className="Access-app">
          <Button1></Button1>
         </div>
        </div>
      <div className="Input-area">
        
      </div>
    </div>
  );
}

export default App;
