import React from "react";
import postsData from "./mockup-data/posts";

export default function postFunc() {
  //const [posts] = React.useState([...postsData]);

  return (
    <div>
      {postsData.map((prop, index) => {
        return <h4>{prop.title}</h4>;
      })}
    </div>
  );
}
