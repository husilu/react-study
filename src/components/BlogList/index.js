import React, { Component } from 'react'

import BlogItem from './BlogItem'

import { connect } from 'react-redux'

import { fetchBlogList } from '../../actions/blog'

class BlogList extends Component {
  componentDidMount() {
    this.props.fetchBlogList()
  }
  render() {
    const {
      list,
      isLoading
    } = this.props
    return (
      isLoading ? <div>loading...</div> :
        <ul>
          {
            list.map(item => {
              return (
                <BlogItem key={item.id} {...item}>
                </BlogItem>
              )
            })
          }
        </ul>
    )
  }
}

const mapState = state => ({
  list: state.blog.list,
  isLoading: state.blog.isLoading
})

export default connect(mapState, { fetchBlogList })(BlogList)