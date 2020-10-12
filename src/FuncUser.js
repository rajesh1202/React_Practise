import React from "react";

export default function FuncUser() {
  const [name, setName] = React.useState("Rajesh");
  const [designation, setdesignation] = React.useState("Developer");
  const [city, setcity] = React.useState("Toronto");

  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>designation:{designation}</li>
        <li>city:{city}</li>
      </ul>

      <div>
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          placeholder="Name"
        />
        <input
          onChange={(event) => {
            setdesignation(event.target.value);
          }}
          placeholder="designation"
        />
        <input
          onChange={(event) => {
            setcity(event.target.value);
          }}
          placeholder="city"
        />
      </div>
    </div>
  );
}
