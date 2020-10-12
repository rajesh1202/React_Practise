import React, { Component } from "react";
import Utils from "./Utils";

//create class based or function based component

export class Timer extends Component {
  constructor() {
    super();
    this.state = {
      name: "Rajesh",
      designatin: "Developer"
    };

    this.onNameChange.bind(this);
  }

  // componentDidMount() {
  //   console.log("Timer componentDidMount", this);
  // }

  // componentDidUpdate() {
  //   console.log("Timer componentDidUpdate", this);
  // }

  onButtonClick() {
    alert("Click");
  }

  onNameChange(event) {
    const nameVal = event.target.value;
    // this.state.name = nameVal;
    this.setState({
      name: nameVal
    });
  }

  render() {
    console.log("Timer render", this);
    return (
      <div>
        <p>Name:{this.state.name} </p>
        <p>Desiganation: {this.state.designatin}</p>

        <div>
          <input onChange={(e) => this.onNameChange(e)} placeholder="name" />
          <input onChange={this.onNameChange} placeholder="Designation" />
        </div>

        <button onClick={this.onButtonClick}>Just Click </button>
      </div>
    );
  }
}

// const MyObject = {
//   val: function(){}
// }

// const myObject = MyObject;
// var value = MyObject.Value;
