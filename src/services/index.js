import axios from 'axios';

const ajax = axios.create({
  // baseURL:'https://www.easy-mock.com/mock/5a8e5e6c576015250b2733df'
})

export const getPosts = () => {
  return ajax.get('news/api')
}