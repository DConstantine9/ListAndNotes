import React, { Component } from 'react';
import logo from './logo.svg';
import List from "./List.js";
import ListHeader from "./ListHeader.js";
import './css/App.css';

export default class FieldList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      tasks: []
    }
  }

  saveTitle(text) {
    this.setState({title: text})
  }

  updateText(text, i) {
    var arr = this.state.tasks
    arr[i] = text
    this.setState({tasks: arr})
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

  remList() {
    this.props.deleteList(this.props.index)
  }

  eachTask(item, i) {
    return (
      <List key={i} index={i} update={this.updateText.bind(this)} deleteBlock={this.deleteBlock.bind(this)}>
        {item}
      </List>
    )
  }

  render() {
    return (
      <div>
        <div className="fieldList">
          <div className="header">
            <div></div>
            <ListHeader saveTitle={this.saveTitle.bind(this)} ref="item">{this.state.title}</ListHeader>
            <i className="fas fa-times" id="delList" onClick={this.remList.bind(this)}></i>
          </div>
          {this.state.tasks.map(this.eachTask.bind(this))}
          <div className="addBtn">
            <i className="fas fa-plus" id="add" onClick={this.add.bind(this, null, "")}></i>
          </div>
        </div>
      </div>
    )
  }
}
