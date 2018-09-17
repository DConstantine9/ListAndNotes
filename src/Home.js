import React, { Component } from 'react';
import logo from './logo.svg';
import "./css/Home.css"

export default class Home extends React.Component {
  render() {
    return(
      <div id="wrap">
       <p id="homeText">Choose your destiny</p>
       <div id="pills">
        <a href="/List" id="red">Lists</a>
        <a href="/Note" id="blue">Notes</a>
       </div>
      </div>
    )
  }
}