import React from 'react'
// import ReactDOM from 'react-dom'
import { render } from 'react-dom'

import './index.css'

import classNames from 'classnames' 

import styled from 'styled-components'

const Title = styled.h1`
color: blue
`
// 定义组件的第二种方式， 使用类

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>类组件!!!11</p>
//         <h1>{this.props.title}</h1>
//       </div>
//     )
//   }
// }
// class App extends React.Component{ 
//   render() {
//       return (
//           React.createElement(
//               'div',
//               {
//                   className: 'app',
//                   id: 'appRoot'
//               },
//               React.createElement(
//                   'h1',
//                   {
//                       className: 'title'
//                   },
//                   'jsx原理'
//               )
//           )
//       )
//   }
// }

// const app = new App({
//   title: '我是标题'
// }).render();

class App extends React.Component{ 
  render() {
    const style = {color: '#F00'}
      return (
        <div>
          <Title>元素中的样式</Title>
          <ol>
            <li style={style}>使用style内敛创建</li>
            <li className='has-text-red'>使用class的方式，但是在react里class要写成className</li>
            <li className={classNames('a', {'b':true, 'c': false})}>要动态添加不同的className就可以使用第三方的包叫classNames,比如这个li标签上就只有a，b没有c</li>
            <li>styled-components</li>
          </ol>
        </div>
      )
  }
}

render(
  <App />,
  document.querySelector('#root')
)

// const app = <h1>Welcome React</h1> // 这种方式可以理解为创建了一个简单的react元素
// const createApp = (props) => {
//   return (
//     <div>
//       {/*  */}
//       <h1>Welcome {props.title}</h1>
//       <p>优秀的{props.title}</p>
//     </div>
//   )
// }
// const app = createApp({
//   title: 'React 16.8'
// });

// const App = (props) => {
//   return (
//     <div>
//       {/*  */}
//       <h1>Welcome {props.title}</h1>
//       <p>优秀的{props.title}</p>
//     </div>
//   )
// }
// ReactDOM.render(
//   <App title='1901'/>,
//   document.querySelector('#root')
// )