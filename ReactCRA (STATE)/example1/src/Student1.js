import React, { Component } from "react";

export default class Student1 extends Component {
    state = { name: "Faizan", roll: 101 }
    render() {
        return (
            <div>
                <h2>Name is: {this.state.name}</h2>
                <h2>Name is: {this.state.roll}</h2>
            </div>
        )
    }
}
