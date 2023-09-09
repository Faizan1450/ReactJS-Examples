import React, { Component } from 'react'
import Message from "./Message"

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>Hello from App</h2>
                <Message />
            </div>
        )
    }
}
