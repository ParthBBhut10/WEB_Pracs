import React from "react";

export default class Home extends React.Component {
    testFun() {
        alert("Hello Friend !")
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <button onClick={() => this.testFun()}>Click here</button>
            </div>
        )
    }
}