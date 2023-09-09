import React, { Component } from 'react'
import foods from "./foods";
import { choice, remove } from "./helper"

export default class Fruit extends Component {
    render() {
        let randomFruit = choice(foods);
        let remainingFruits = remove(foods, randomFruit)
        return (
            <div>
                <p>Total Fruits: {foods.length}</p>
                <p>They are: {foods.join(", ")}</p>
                <p>Chosen Fruit: {randomFruit}</p>
                <p>Remaining Fruits: {remainingFruits.length}</p>
                <p>They are: {remainingFruits.join(", ")}</p>
            </div>
        )
    }
}
