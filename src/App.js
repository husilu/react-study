import React, { Component } from 'react'

import { Route, NavLink as Link, Redirect, Switch } from 'react-router-dom';

import { Articles, Home, Users, ArticleDetail, NotFound } from './views';

export default class App extends Component {
  state = {
    isLogin: false
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/home'>首页</Link>
          </li>
          <li>
            <Link to='/article'>文章</Link>
          </li>
          <li>
            <Link to='/users'>用户</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route component={Articles} path='/article' exact></Route>
          <Route component={ArticleDetail} path='/article/:id'></Route>
          <Route path='/users' render={(routeProps) => {
            return this.state.isLogin ? <Users {...routeProps}></Users> : <div>请登录</div>
          }}></Route>
          <Route component={NotFound} path='/404'></Route>
          <Redirect to="/home" from='/' exact></Redirect>
          <Redirect to="/404"></Redirect>
        </Switch>
      </div>
    )
  }
}
