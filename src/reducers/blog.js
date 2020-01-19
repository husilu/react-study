import actionTypes from '../actions/actionTypes'
const initState = {
  list: [
    {
      userId: 1,
      id: 1,
      title: '标题1',
      body: '内容1'
    },
    {
      userId: 1,
      id: 2,
      title: '标题2',
      body: '内容2'
    }
  ],
  isLoading: false
};
export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCH_BLOG_LIST:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.FETCH_BLOG_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload.list
      }
    case actionTypes.FETCH_BLOG_LIST_FAILED:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}