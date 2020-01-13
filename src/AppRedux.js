import React, { Component } from 'react'

import { CartList } from './components/gouwuche/index'

import store from './store'

window.store = store;
// console.log(store)

export default class AppRedux extends Component {
  render() {
    return (
      <div>
        <CartList></CartList>
      </div>
    )
  }
}
