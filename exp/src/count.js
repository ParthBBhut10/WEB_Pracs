import React from "react";
import ReactDOM from "react";
import shoes from './shoes.jpg';
import { useState } from "react"
import Home from "./home";

function Count(props) {
    const [count, changecount] = useState(0)
    function increment() {
        changecount(count + 1)
    }
    function decrement() {
        changecount(count - 1)
    }
    return (
        <div>
            <img src={shoes}></img>
            <h2> No.of Shoes :{count}</h2>

            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Cancel</button>
        </div>
    );
}
export default Count;
