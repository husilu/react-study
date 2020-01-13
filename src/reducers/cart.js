import actionType from '../actions/actionType'
const initState = [{
  id: 1,
  title: 'Apple',
  price: 8888.6,
  mount: 10
},
{
  id: 2,
  title: 'Orange',
  price: 4444.6,
  mount: 10
}]
export default (state = initState, action) => {
  switch (action.type) {
    case actionType.CART_AMOUNT_INCREMENT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          item.mount += 1;
        }
        return item;
      })
    case actionType.CART_AMOUNT_DECREMENT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          item.mount -= 1;
        }
        return item;
      })
    default:
      return state
  }
}