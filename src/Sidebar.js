import React, { Component } from 'react';
import logo from './logo.svg';
import "./css/Sidebar.css"

export default class Sidebar extends React.Component {

  render() {
    return(
      <ul id="sidebar">
        <a href="/List" id="sideList"><i id="vList" className="far fa-list-alt"></i>List</a>
        <a href="/Note" id="sideNote"><i id="vNote" className="far fa-sticky-note"></i>Note</a>
      </ul>
    )
  }
}
