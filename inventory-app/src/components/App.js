import React from 'react';
import '../css/App.css';
import '../css/Button.css';
import '../css/Form.css';
import LabelButton from './Button';
import { Route, Router } from "react-router";
import { HashRouter, Link, BrowserRouter } from "react-router-dom";
import { Admin } from './Admin';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
      <BrowserRouter>
        <Route path="/Admin" component={Admin} />
        <div className="row">
          <div className="App-title">
            <h3>Inventory Management</h3>
          </div>
          <div className="Label-button">
            <div>
              {/* <Link to="/Admin">Admin</Link> */}
              <LabelButton label="Admin" path='/admin'></LabelButton>
            </div>
            <div>
              <LabelButton label="Sign up" path='/signup'></LabelButton>
            </div>
          </div>
        </div>

        <div className="Input-area">

        </div>
      </BrowserRouter>
  );
}

export default App;
