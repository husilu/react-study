import React, { Component, createContext } from 'react';
import { render } from 'react-dom'

// console.log()

const {
  Provider,
  Consumer: ConterConsumer
} = createContext()

class CouterProvider extends Component {
  constructor() {
    super()
    this.state = {
      count: 100
    }
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    return (
      <Provider value={{
        count: this.state.count,
        onIncrementCount: this.incrementCount,
        onDecrementCount: this.decrementCount,
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

class Counter extends Component {
  render() {
    return (
      <ConterConsumer>
        {
          ({count}) => {
            return <span>{count}</span>
          }
        }
      </ConterConsumer>
    )
  }
}
class CountBtn extends Component {
  render() {
    return (
      <ConterConsumer>
      {
        ({onDecrementCount, onIncrementCount}) => {
          handler = this.props.type === 'increment' ? onIncrementCount : onDecrementCount
          return <button onClick={handler}>{this.props.children}</button>
        }
      }
      </ConterConsumer>
    )
  }
}
class App extends Component {
  render() {
    return (
      <>
        <CountBtn type='decrement'>-</CountBtn>
        <Counter />
        <CountBtn type='increment'>+</CountBtn>
      </>
    )
  }
}

render(
  <CouterProvider>
  <App />
  </CouterProvider>,
  document.querySelector('#root')
)