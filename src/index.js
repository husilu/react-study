import React, { useState, useEffect } from 'react'

import { render } from 'react-dom'

import App from './App'

import AppRedux from './AppRedux'

import * as services from './services'

import { Provider } from 'react-redux'

import store from './store'

const Counter = () => {
  useEffect(() => {
    console.log('更新了！')
    document.title = `当前数量为${count}`
  })
  // console.log()
  const [count, setCount] = useState(20)
  return (
    < div >
      <p>当前的数量为{count}</p>
      <button onClick={() => { setCount(count - 1) }}>-</button>
      <span>{count}</span>
      <button onClick={() => { setCount(count + 1) }}>+</button>
    </div >
  )
}

React.Component.prototype.http = services

render(
  <Provider store={store}>
    <App/>
    <AppRedux />
  </Provider>
  ,
  document.querySelector('#root')
)