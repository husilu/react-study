import React, { Component, createRef } from 'react'

import PropTypes from 'prop-types'

export default class TodoInput extends Component {
  static propTypes = {
    btnText: PropTypes.string
  }
  static defaultProps = {
    btnText: '添加TODO'
  }
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
    this.testHandlerCopy = this.testHandler.bind(this, 123)
    this.inputDom = createRef()
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue}
        onChange={this.handleInputChange}
        // onKeyUp={this.handleAddClick}
        ref={this.inputDom}
        /><button onClick={this.addHandler}>{this.props.btnText}</button>
        <button onClick={this.testHandlerCopy}>Test</button>
      </div>
    )
  }
  handleAddClick = (e) => {

    this.props.addTodo(this.state.inputValue)
    // console.log(this.inputDom)
  }
  testHandler(e, id) {
    // console.log(e)
    console.log(e)
    console.log(id)
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.currentTarget.value
    })
    // console.log(e.currentTarget.value)
  }
  addHandler = () => {
    if(this.state.inputValue === '') {
      return;
    }
    this.props.addTodo(this.state.inputValue)
    this.setState({
      inputValue: ''
    },() => {
      this.inputDom.current.focus();
    })
  }
}
