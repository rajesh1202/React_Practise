import React from "react";

export default function PostView(props) {
  console.log("PostView Props", props);
  return (
    <div className="app__single__post">
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  );
}
