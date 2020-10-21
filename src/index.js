import React from "react";
import ReactDOM from "react-dom";
// import { Timer } from "./Timer";
// import User from "./User";
import FuncUser from "./FuncUser";
import UserList from "./UserList";
import postFunc from "./postFunc";
import PostContainer from "./posts/PostContainer";
import PostClassContainer from "./posts/PostClassContainer";
import GalleryContainer from "./gallery/GalleryContainer";
import Greeting from "./conditional-rendering/Greeting";
import MyList from "./lists/MyList";
import DrumKitSound from "./Drum-Kit/DrunKitSound";
import JSClock from "./JS-Clock/JSClock";

const htmlContent = (
  <div>
    <h1>Hello World</h1>
    <p>Sample React App </p>
  </div>
);

//React Class base component | element

class MyFirstComponent extends React.Component {
  render() {
    return (
      <div>
        "Sample text contetnt"
        {htmlContent}
      </div>
    );
  }
}

//React Function based component | element

//function MyFunction (){} or const MyFunction = ()=>{}
const MyFunction = () => {
  return (
    <ul>
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
    </ul>
  );
};

// ReactDOM.render(
//   <div>
//     <User />
//   </div>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <div>
    <JSClock id="first" />
    <JSClock id="second" />
  </div>,
  document.getElementById("root")
);
