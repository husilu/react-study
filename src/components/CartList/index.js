import React, { Component } from 'react'

// connect方法执行之后是一个高阶组件
import { connect } from 'react-redux'

// 导入actionCreators
import { increment, decrement } from '../../actions/cart'

class CartList extends Component {
  render() {
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
                      <button onClick={() => this.props.decrement(item.id)}>-</button>
                      <span>
                        {item.amount}
                      </span>
                      <button onClick={() => this.props.increment(item.id)}>+</button>
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
    )
  }
}

// mapStateToProps, 这里的state实际上就是store.getState()的值
const mapState = (state) => {
  // 这里return了什么在组件里就可以通过props使用
  return {
    cartList: state.cart
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     add:(id) => dispatch(increment(id)),
//     reduce: (id) => dispatch(decrement(id))
//   }
// }

// connect方法有四个参数，常用的就是 前面两个
// 第一个参数是mapStateToProps，作用就是从store里面把state注入到当前组件的props上
// 第二个参数是mapDispatchToProps，这个的主要作用是把action生成的方法 注入到当前组件的props上面，一般不这样用
// 直接第二个参数传递一个对象，这里的对象就是actionCreators，只要传入了actionCreators，在组件内，就可以通过this.props.actionCreator来调用 actionCreator会自动帮你把action dispatch出去

export default connect(mapState, { increment, decrement })(CartList)