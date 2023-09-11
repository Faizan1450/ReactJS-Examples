import React, { Component } from 'react'
import ShoppingCart from './ShoppingCart'

export default class App extends Component {
  render() {
    return (
      <div>
        <ShoppingCart items={["Mobile", "Watch"]} />
      </div>
    )
  }
}
