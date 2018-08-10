import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Field from './FieldNote.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
      active: false
    }
  }

  edit() {
    this.setState({edit: true})
  }

  remove() {
    this.props.deleteBlock(this.props.index)
  }

  done() {
    this.setState({active: true})
    this.props.done(this.props.index)
  }

  cancel() {
    if (this.refs.newTxt.value == "") {
      this.props.deleteBlock(this.props.index)
      this.setState({edit: false})
    } else {
      this.setState({edit: false})
    }
  }

  save() {
    this.props.update(this.refs.newTxt.value, this.props.index)
    this.setState({edit: false})
  }

  rendNorm() {
    return (
      <div className="box">
        <p className="text" onClick={this.edit.bind(this)}>{this.props.children}</p>
        <div className="buttons">
          <i className="fas fa-check" id="done" /*className="lick-ass {this.state.show ? 'active':'hide'}"*/ onClick={this.done.bind(this)}></i>
          <i className="fas fa-times" id="del" onClick={this.remove.bind(this)}></i>
        </div>
      </div>
    ); 
  }

  rendEdit() {
    return (
      <div>
        <textarea className="textarea" autoFocus ref="newTxt" defaultValue={this.props.children}></textarea>
        <div className="btnCS">
          <button className="cancel" onClick={this.cancel.bind(this)}>Отмена</button>
          <button className="btnsave" onClick={this.save.bind(this)}>Сохранить</button>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.edit) {
      return this.rendEdit();
    } else {
      return this.rendNorm();
    }
  }
}
