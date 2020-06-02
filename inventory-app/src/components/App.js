import React from 'react';
import { LabelButtonRouter } from './Button';
import { BrowserRouter } from "react-router-dom";
import { Admin } from './Admin';
import { Route } from "react-router";
import { Header } from "./Header";
import { Body } from "./Body";

function App() {
  return (
    <BrowserRouter>
      <Route path="/Admin" component={Admin} />
      <Header />
      <Body />
    </BrowserRouter>
  );
}

export default App;
