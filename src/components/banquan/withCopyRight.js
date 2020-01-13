import React, { Component } from 'react'

const withCopyright = (Yourcompoent) => {
  return class withCopyright extends Component {
    render() {
      const newProps = {
        age: 12
      }
      return (
        <>
          <Yourcompoent {...newProps} {...this.props}/>
          <div>&copy; 2019 &emsp; 前锋教育</div>
        </>
      )
    }
  }
}

export default withCopyright