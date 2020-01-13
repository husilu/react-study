import React, { Component } from 'react'

export default class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.isCompleted!==this.props.isCompleted
  }
  render() {
    console.log('todoitem render')
    return (
      <li>
        {this.props.title} {this.props.isCompleted ? '完成' : '未完成'}
        <button onClick={this.changeHanlder.bind(this, this.props.id)}> changge</button>
      </li>
    )
  }
  changeHanlder = (id) => {
    this.props.changeHanlder(id)
  }
}
