import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { currDate: new Date() }
        setInterval(() => {
            this.setState({ currDate: new Date() });
        }, 1000);
    }

    render() {
        return (
            <div>
                <h2>Hello Everyone!</h2>
                <p>Current date and time: {this.state.currDate.toLocaleString()}</p>
            </div>
        )
    }
}
