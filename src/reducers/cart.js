// 
import acitonType from '../actions/actionType'
// 初始化都是在reducer里面初始化
const initState = [{
  id: 1,
  title: 'Apple',
  price: 999,
  amount: 10
},
{
  id: 2,
  title: 'Orange',
  price: 100,
  amount: 5
}]

// 创建购物车的reducer， reducer的固定写法是两个参数，第一个是state并有一个初始值，第二个是action
export default (state = initState, action) => {
  // 根据不同的action.type 做不同的处理 每次返回一个新的state 返回的类型要一样
  switch (action.type) {
    case acitonType.CART_AMOUNT_INCREMENT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          item.amount += 1
        }
        return item
      })
    case acitonType.CART_AMOUNT_DECREMENT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          item.amount -= 1
        }
        return item
      })
    default:
      return state
  }
}