// createStore是redux提供的一个 用于创建store的一个方法
import { createStore } from 'redux';

// 引入合并后的reducer
import rootReducer from './reducers'

// createStore的第一个参数 必须是一个reducer 如果是多个 必须在reducers目录下先使用combineReducers合并之后再导出
export default createStore(rootReducer)