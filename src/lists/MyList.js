import React from "react";

export default function MyList() {
  const numbers = getRandomNumber(15);

  return (
    <ul>
      {numbers.map((item, index) => (
        <li>
          Index: {index} = Value:{item}
        </li>
      ))}
    </ul>
  );
}

function getRandomNumber(n = 10) {
  return new Array(n).fill(1).map((item) => Math.round(Math.random() * n));
}
