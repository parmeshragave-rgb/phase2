
import React, { Component } from 'react'
import UserContext from './UseContext'
import ComponentC from './ComponentC'
class ComponentB extends Component {
  static contextType=UserContext
  render() {
    return (
      <div>From component B: {this.context}<ComponentC/></div>
    )
  }
}

// ComponentB.contextType=UserContext;
export default  ComponentB 


