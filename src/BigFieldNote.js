import React, { Component } from 'react';
import logo from './logo.svg';
import Sidebar from "./Sidebar"
import FieldList from './FieldList.js'

export default class BigField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }
  }

  newList(field) {
    var arr = this.state.lists
    arr.push(field)
    this.setState({lists: arr})
  }

  deleteList(i) {
    var arr = this.state.lists
    delete arr[i]
    this.setState({lists: arr})
  }

  render() {
    let self = this
    return (
      <div>
        <Sidebar />
        <div className="BigField">
          <div>
            <i className="fas fa-plus" id="addList" onClick={this.newList.bind(this)}></i>
          </div>
          <div className="lists">
            {this.state.lists.map((item, i) => {
              return (
                <FieldList key={i} index={i} deleteList={self.deleteList.bind(self)}>
                  {item}
                </FieldList>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}