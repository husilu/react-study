import React, { Component } from 'react'

export default class Like extends Component {
  constructor() {
    super()
    this.state = {
      isLiked: false
    }
  }
  handlerLikedClick = () => {
    this.setState((preState) => {
      console.log('内部的state', this.state.isLiked)
      return {
        isLiked: !preState.isLiked
      }
    }, () => {
      //  由于setState是异步的，如果想要获取到最新的state，应该在这个回调里面来获取
      console.log(this.state.isLiked)
    })
    console.log('外部的state', this.state.isLiked)
  }
  render() {
    return (
      <div>
        <span onClick={this.handlerLikedClick}>
          {
            this.state.isLiked ? '取消 ❤️' : '喜欢 💔'
          }
        </span>
      </div>
    )
  }
}
