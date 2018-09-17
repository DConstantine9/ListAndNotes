import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true
    }
  }

  edit() {
    this.setState({edit: true})
  }

  remove() {
    this.props.deleteBlock(this.props.index)
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

  rendEdit() {
    return (
      <div>
        <div className="left-edit">
          <label>
            <input className="checkbox" type="checkbox"/>
            <span className="checkbox-custom"></span>
          </label>
          <textarea className="textarea" autoFocus ref="newTxt" defaultValue={this.props.children}></textarea>
        </div>
        <div className="btnCS">
          <button className="cancel" onClick={this.cancel.bind(this)}>Отмена</button>
          <button className="btnsave" onClick={this.save.bind(this)}>Сохранить</button>
        </div>
      </div>
    )
  }

  rendNorm() {
    return (
      <div className="boxLine">
        <div className="left">
          <label>
            <input className="checkbox" type="checkbox"/>
            <span className="checkbox-custom"></span>
          </label>
          <p className="textLine" onClick={this.edit.bind(this)}>{this.props.children}</p>
        </div>
        <i className="fas fa-times" id="del" onClick={this.remove.bind(this)}></i>
      </div>
    ); 
  }

  render() {
    if (this.state.edit) {
      return this.rendEdit();
    } else {
      return this.rendNorm();
    }
  }
}