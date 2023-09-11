import React, { Component } from 'react'

export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = { items: this.props.items };
        setTimeout(this.updateCart, 3000)
    }

    updateCart = () => {
        this.setState({ items: [...this.state.items, "Iphone15"] })
    }

    render() {

        return (
            <div>
                <h2>Your Cart Details</h2>
                <p>Product Details: {this.state.items.join(", ")}</p>
                <p>Product counting: {this.state.items.length}</p>
            </div>
        )
    }
}
