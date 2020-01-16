import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Provider是react-redux 提供的一个组件
import { Provider } from 'react-redux';

import store from './store';


ReactDOM.render(
  // 一般就直接把这个组件放在应用程序的最顶层，这个组件必须有一个store属性，这个store属性的值就是咱们创建的那个store
  // 只要在最外层包裹了这个Provider，那么所有后台组件都可以使用Redux，connect做链接
<Provider store={store}>
  <App/>
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
