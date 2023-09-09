import React, { Component } from 'react'
import foods from './foods'
import { choice, remove } from './helper'

export default class Fruits extends Component {
    render() {
        let food = choice(foods);
        let newFoods = remove(foods, food);
        return (
            <div>
                <p>Total Fruits: {foods.length}</p>
                <p>They are {foods.join(", ")}</p>
                <p>Chosen Fruit: {food}</p>
                <p>Remaining Fruit: {newFoods.length}</p>
                <p>They are: {newFoods.join(", ")}</p>
            </div>
        )
    }
}
