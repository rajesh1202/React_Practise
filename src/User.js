import React, { Component } from "react";
import { render } from "react-dom";

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      designation: "",
      city: ""
    };
  }

  onFeildChnage = (propKey, inputValue) => {
    this.setState({
      [propKey]: inputValue
    });
  };
  render() {
    return (
      <div>
        <ul>
          <li>Name: {this.state.name}</li>
          <li>designation:{this.state.designation}</li>
          <li>city: {this.state.city}</li>
        </ul>

        <div>
          <input
            onChange={(event) => {
              this.onFeildChnage("name", event.target.value);
            }}
            placeholder="Name"
          />
          <input
            onChange={(event) => {
              this.onFeildChnage("designation", event.target.value);
            }}
            placeholder="designation"
          />
          <input
            onChange={(event) => {
              this.onFeildChnage("city", event.target.value);
            }}
            placeholder="city"
          />
        </div>
      </div>
    );
  }
}
