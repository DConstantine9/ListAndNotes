import React, { Component } from 'react';
import logo from './logo.svg';
import App from "./App.js";
import $ from "jquery";

export default class Field extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      editTitle: false,
      active: false
    }
  }

  add(text) {
    var arr = this.state.tasks
    arr.push(text)
    this.setState({tasks: arr});
  }
  
  deleteBlock(i) {
    var arr = this.state.tasks
    arr.splice(i, 1)
    this.setState({tasks: arr})
  }

  done() {
    var x = document.getElementById("done")
    if(this.state.active) {
      x.style.display = "flex"
    }
  }

  /*done() {
    $("#done").click(function() {
      $(this).attr("id", ($(this).attr("id") === "done" ? "undone" : "done"))
    })
  }*/

  newList() {
    let list = new App()
    this.setState( (prev) => {
      return {list: prev.lists.push(prev.lists.length)}
    });
  }

  updateText(text, i) {
    var arr = this.state.tasks
    arr[i] = text
    this.setState({tasks: arr})
  }

  titleEdit() {
    this.setState({editTitle: true})
  }

  eachTask(item, i) {
    return (
      <App key={i} index={i} update={this.updateText.bind(this)} deleteBlock={this.deleteBlock.bind(this)} done={this.done.bind(this)}>
        {item}
      </App>
      )
  }

  rendEdit() {
    return (
      <div className="field">
        <textarea className="titleEdit" ref="newTxt" autoFocus defaultValue={this.props.children}></textarea>
        {this.state.tasks.map(this.eachTask.bind(this))}
        <div className="addBtn">
        <i className="fas fa-plus" id="add" onClick={this.add.bind(this, null, "")}></i>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="field">
        <p onClick={this.titleEdit.bind(this)} className="title">testing</p>
        {this.state.tasks.map(this.eachTask.bind(this))}
        <div className="addBtn">
        <i className="fas fa-plus" id="add" onClick={this.add.bind(this, null, "")}></i>
        </div>
      </div>
    )
  }
}

