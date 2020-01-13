import React, { Component } from 'react'

// import store from '../../../store.js';
import { connect } from 'react-redux'

import { increment, decrement, decrementAsync } from '../../../actions/cart'

class cart extends Component {
  constructor() {
    super()
    this.state = {
      List: []
    }
  }
  // getState = () => {
  //   this.setState({
  //     List:store.getState().cart
  //   })
  // }
  // componentDidMount() {
  //   this.getState()
  //   store.subscribe(this.getState)
  // }
  render() {
    // console.log(this.props)
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.cartList.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={this.props.decrementAsync.bind(this,item.id)}>-</button>
                    <span>{item.mount}</span>
                    <button onClick={this.props.increment.bind(this,item.id)}>+</button>
                  </td>
                  <td></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    cartList: state.cart
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     add: (id) => dispatch(increment(id)),
//     reduce: (id) =>  dispatch(decrement(id)),
//   }
// }

export default connect(mapStateToProps, { increment, decrement, decrementAsync })(cart)