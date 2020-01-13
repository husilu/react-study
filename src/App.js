import React, { Component, Fragment } from 'react'

import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like
} from './components'

import { getTodos } from './services'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      title: '待办事项列表1',
      desc: '今日事，今日毕',
      // article: '<div>dangerous</div>',
      todos: [{
        id: 1,
        title: '吃饭',
        isCompleted: true
      },
      {
        id: 2,
        title: '睡觉',
        isCompleted: false
      }
      ]
    }
  }

  componentDidMount() {
    getTodos().then(res=>{
      console.log(res)
    })
  }

  addTodo = (todoTile) => {
    // console.log(todoTile)
    let arr = this.state.todos.slice();
    arr.push({
      id: this.state.todos.length + 1,
      title: todoTile,
      isCompleted: false
    })
    this.setState({
      todos: arr
    })
  }
  changeHanlder = (id) => {
    let arr = this.state.todos.slice()
    arr.forEach((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted
      }
    })
    console.log(arr)
    this.setState({
      todos: arr
    })
  }
  onCompeletedChange = () => {
    console.log('onCompeletedChange')
  }
  render() {
    return (
      <Fragment>
        {/* {
          this.state.todos.map((todo, index) => {
            return <div key={index}>{todo.title}</div>
          })
        } */}
        {/* {
          <div dangerouslySetInnerHTML={{__html:this.state.article}} />
        } */}
        <TodoHeader desc={this.state.desc}>
          {this.state.title}
        </TodoHeader>
        <TodoInput btnText="ADD" addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} changeHanlder={this.changeHanlder} onCompeletedChange={this.onCompeletedChange}/>
        <Like>
        </Like>
      </Fragment>
    )
  }
}
// import React, { Component, createContext } from 'react';
// import { render } from 'react-dom'
// import Layout from './layout'
// // console.log()

// const {
//   Provider,
//   Consumer: ConterConsumer
// } = createContext()

// class CouterProvider extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 100
//     }
//   }
//   incrementCount = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
//   decrementCount = () => {
//     this.setState({
//       count: this.state.count - 1
//     })
//   }
//   render() {
//     return (
//       <Provider value={{
//         count: this.state.count,
//         onIncrementCount: this.incrementCount,
//         onDecrementCount: this.decrementCount,
//       }}>
//         {this.props.children}
//       </Provider>
//     )
//   }
// }

// class Counter extends Component {
//   render() {
//     return (
//       <ConterConsumer>
//         {
//           ({count}) => {
//             return <span>{count}</span>
//           }
//         }
//       </ConterConsumer>
//     )
//   }
// }
// class CountBtn extends Component {
//   render() {
//     return (
//       <ConterConsumer>
//       {
//         ({onDecrementCount, onIncrementCount}) => {
//           const handler = this.props.type === 'increment' ? onIncrementCount : onDecrementCount
//           return <button onClick={handler}>{this.props.children}</button>
//         }
//       }
//       </ConterConsumer>
//     )
//   }
// }
// class App extends Component {
//   render() {
//     return (
//       <>
//         <Layout></Layout>
//         <CouterProvider>
//         <CountBtn type='decrement'>-</CountBtn>
//         <Counter />
//         <CountBtn type='increment'>+</CountBtn>
//         </CouterProvider>
//       </>
//     )
//   }
// }

// export default App;