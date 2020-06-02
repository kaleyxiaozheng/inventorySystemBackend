import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Login } from './Login';
import { Route, Switch } from "react-router";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Signup } from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route eaxct path="/Login" component={Login} />
      <Route eaxct path="/Signup" component={Signup} />
      <Route eaxct path="/" component={Body} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
