import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Link} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import FieldNote from './FieldNote.js'
import Home from './Home.js';
import BigField from "./BigFieldNote"

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/List" component={BigField}/>
          <Route exact path="/Note" component={FieldNote}/>
        </div>
      </BrowserRouter>
    )
  }
  
}
