import React, { Component } from 'react'
import './css/ListHeader.css';

export default class ListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editTitle: true
    }
  }

  edit() {
    this.setState({editTitle: true})
  }

  updateTitle() {
    this.props.saveTitle(this.refs.newTitle.value)
    this.setState({editTitle: false})
  }

  rendEdit() {
    return (
      <div className="divTitle">
        <textarea className="titlearea" autoFocus ref="newTitle" defaultValue={this.props.children} onBlur={this.updateTitle.bind(this)}></textarea>
      </div>
    )
  }

  rendNorm() {
    return (
      <div>
        <p className="title" onClick={this.edit.bind(this)}>{this.props.children}</p>
      </div>
    )
  }

  render() {
    if (this.state.editTitle) {
      return this.rendEdit();
    } else {
      return this.rendNorm();
    } 
  }

}
