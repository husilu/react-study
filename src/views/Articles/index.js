import React, { Component } from 'react'
import {
  Link, Route
} from 'react-router-dom'
import ArticleDetail from './ArticleDetail'

export default class Article extends Component {
  render() {
    return (
      <div>
        <Link to='/article/1'>文章1</Link>
        <Link to={{
          pathname: '/article/2',
          state: {
            from: 'article'
          }
        }}>文章2</Link>
      </div>
    )
  }
}
