import React, { Component } from "react";

export default class Student1 extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "Fardeen", roll: 102 }
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
