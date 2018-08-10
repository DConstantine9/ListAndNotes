import React, { Component } from 'react';
import logo from './logo.svg';
import App from "./App.js";
import Field from './FieldNote.js'

export default class BigField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lists = []
    }
  }

  newList() {
    let list = new App()
    this.setState( (prev) => {
      return {list: prev.lists.push(prev.lists.length)}
    });
  }

  render() {
    return(
      <div>
        <Field></Field>
        <i className="fas fa-plus" id="addList" onClick={this.newList.bind(this)}></i>
      </div>
    )
  }


}