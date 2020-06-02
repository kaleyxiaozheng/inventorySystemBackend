import React from 'react';
import { LabelButtonRouter } from './Button';
import { BrowserRouter } from "react-router-dom";
import { Admin } from './Admin';
import { Route } from "react-router";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Route path="/Admin" component={Admin} />
      <Header />
      <Body />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
