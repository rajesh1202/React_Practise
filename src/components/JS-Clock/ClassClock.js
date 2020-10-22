import React, { Component } from "react";

export default class ClassClock extends Component {
  constructor(props) {
    super(props);

    this.hourRef = React.createRef();
    this.minRef = React.createRef();
    this.secRef = React.createRef();
  }

  componentDidMount() {
    console.log({
      minRef: this.minRef,
      hourRef: this.hourRef,
      secRef: this.secRef
    });
    this.updateTimer();
    setInterval(this.updateTimer, 1000);
  }

  updateTimer = () => {
    const now = new Date();
    const secondHand = this.secRef.current; // document.querySelector(".second-hand");
    const minsHand = this.minRef.current; //document.querySelector(".min-hand");
    const hourHand = this.hourRef.current; //document.querySelector(".hour-hand");

    if (!secondHand || !minsHand || !hourHand) {
      return false;
    }
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  };

  render() {
    return (
      <div className="clock">
        <div className="clock-face">
          <div ref={this.hourRef} className="hand hour-hand"></div>
          <div ref={this.minRef} className="hand min-hand"></div>
          <div ref={this.secRef} className="hand second-hand"></div>
        </div>
      </div>
    );
  }
}
