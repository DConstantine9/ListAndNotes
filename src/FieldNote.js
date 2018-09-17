import React, { Component } from 'react';
import logo from './logo.svg';
import Note from "./Note.js";
import "./css/Note.css"
import Sidebar from "./Sidebar"

export default class FieldNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  add(text) {
    var arr = this.state.tasks
    arr.push(text)
    this.setState({tasks: arr})
  }

  deleteBlock(i) {
    var arr = this.state.tasks
    arr.splice(i, 1)
    this.setState({tasks: arr})
  }

  updateText(text, i) {
    var arr = this.state.tasks
    arr[i] = text
    this.setState({tasks: arr})
  }

  eachTask(item, i) {
    return (
      <Note key={i} index={i} update={this.updateText.bind(this)} deleteBlock={this.deleteBlock.bind(this)}>
        {item}
      </Note>
    )
  }

  render() {
    return (
      <div>
        <Sidebar />
        <div className="field">
        <i className="fas fa-plus" onClick={this.add.bind(this, null, "")} id="a"></i>
        <div className="boxes">
          {this.state.tasks.map(this.eachTask.bind(this))}
        </div>
        </div>  
      </div>
    ) 
  }
}
