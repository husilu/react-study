// 通过combineReducers 方法将所有的reducer合并起来，然后给createStore使用
import { combineReducers } from 'redux';

import cart from './cart';

// 导出合并后的reducer
export default combineReducers({
  // 把多个reducer作为combineReducers的对象参数传入， 在外部就可以通过store.getState().cart 获取到cartReducer里面的state
  cart
})