import React from "react";
import "./styles.css";

export default function JSClock(props) {
  const secRef = React.useRef(null);
  const minRef = React.useRef(null);
  const hourRef = React.useRef(null);
  React.useEffect(() => {
    function setDate() {
      const now = new Date();
      const secondHand = secRef.current; // document.querySelector(".second-hand");
      const minsHand = minRef.current; //document.querySelector(".min-hand");
      const hourHand = hourRef.current; //document.querySelector(".hour-hand");
      //   console.log({
      //     id: props.id,
      //     secondHand,
      //     minsHand,
      //     hourHand,
      //   });

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
    }

    setInterval(setDate, 1000);

    setDate();
  });

  return (
    <div className="clock">
      <div className="clock-face">
        <div ref={hourRef} className="hand hour-hand"></div>
        <div ref={minRef} className="hand min-hand"></div>
        <div ref={secRef} className="hand second-hand"></div>
      </div>
    </div>
  );
}
