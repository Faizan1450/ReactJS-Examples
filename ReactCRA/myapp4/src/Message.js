import React, { Component } from 'react'
import "./Message.css";

export default class Message extends Component {
    render() {
        return (
            <div>
                <h2 className='message'>This is me!</h2>
                <img src={require("./Faizan Photo.png")} className='message'/>
            </div>
        )
    }
}
