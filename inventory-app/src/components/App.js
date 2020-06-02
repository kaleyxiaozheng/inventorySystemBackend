import React from 'react';
import '../css/App.css';
import '../css/Button.css';
import '../css/Form.css';
import {LabelButtonRouter} from './Button';
import {BrowserRouter } from "react-router-dom";
import { Admin } from './Admin';
import { Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
        <Route path="/Admin" component={Admin} />
      <div className = "row">
        <div className="App-title">
         <h3>Inventory Management</h3>
        </div>
        <div className="Access-app">
          <LabelButtonRouter label="Admin" path='/admin'></LabelButtonRouter>
          <LabelButtonRouter label="Signup" path='/signup'></LabelButtonRouter>
         </div>
        </div>
      <div className="Input-area">
        
      </div>
      </BrowserRouter>
  );
}

export default App;
