import React, { Component } from 'react';
import logo from './logo.svg';
import "./css/Note.css"

export default class Note extends React.Component {
  constructor(props) {
    super(props)
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

  save() {
    this.props.update(this.refs.newText.value, this.props.index)
    this.setState({edit: false})
  }

  rendNorm() {
    return( 
      <div className="box">
        <div className="text">{this.props.children}</div>
        <div className="buttons">
          <i className="fas fa-pencil-alt" onClick={this.edit.bind(this)} id="btnlight"></i>
          <i className="fas fa-times" onClick={this.remove.bind(this)} id="btnred"></i>
        </div>
      </div>
    )
  }

  rendEdit() {
    return( 
      <div className="boxEdit">
        <textarea id="textarea" ref="newText" defaultValue={this.props.children}></textarea>
        <div className="btnSaveDiv">
          <button onClick={this.save.bind(this)} className="btnsuccess">Сохранить</button>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.edit) {
      return this.rendEdit()
    } else {
      return this.rendNorm()
    }
  }
}
