import React, { Component } from 'react'

import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo => {
            return (
              // <TodoItem title={todo.title} key={todo.id} isCompleted={todo.isCompleted} id={todo.id}></TodoItem>
              <TodoItem
              key = {todo.id}
              {...todo}
              changeHanlder = {this.changeHanlder}
              onCompeletedChange = {this.onCompeletedChange}
              />
            )
          })
        }
      </ul>
    )
  }
  changeHanlder = (id) => {
    this.props.changeHanlder(id)
  }
}
