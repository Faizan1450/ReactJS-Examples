import React, { Component } from "react";

export default class Student1 extends Component {
    constructor(props) {
        super(props);
        this.state = { name: this.props.name, roll: this.props.roll }
    }
    render() {
        return (
            <div>
                <h2>Name is: {this.state.name}</h2>
                <h2>Name is: {this.state.roll}</h2>
            </div>
        )
    }
}
