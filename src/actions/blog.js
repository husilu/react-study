import actionTypes from './actionTypes'
import { getPosts } from '../services'

const startFetchBlogList = () => {
  return {
    type: actionTypes.START_FETCH_BLOG_LIST
  }
}

const fetchBlogListSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_BLOG_LIST_SUCCESS,
    payload
  }
}

const fetchBlogListFailed = () => {
  return {
    type: actionTypes.FETCH_BLOG_LIST_FAILED
  }
}

export const fetchBlogList = () => dispatch => {
  dispatch(startFetchBlogList())
  getPosts().then(res => {
    console.log(res)
    if (res.status === 200) {
      dispatch(fetchBlogListSuccess({
        list: res.data.user
      }))
    } else {
      dispatch(fetchBlogListFailed())
    }
  }).catch(err => {
    console.log(err)
    dispatch(fetchBlogListFailed())
  })
}