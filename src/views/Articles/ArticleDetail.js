import React, { Component } from 'react'
import { BackHome } from '../../components'

export default class ArticleDetail extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        文章{this.props.match.params.id}详情
        <BackHome></BackHome>
      </div>
    )
  }
}
