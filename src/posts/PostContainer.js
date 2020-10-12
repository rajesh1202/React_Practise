import React from "react";
import PostView from "./PostView";

import "./style.css";

export default function PostContainer() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    console.log("Calling useEffect");
    //   setPosts([
    //     {title: "Sample" , body:"Anothe Body"}
    // ])

    const POST_API_URL = "https://jsonplaceholder.typicode.com/posts";
    fetch(POST_API_URL)
      .then((response) => response.json())
      .then((responsePosts) => setPosts(responsePosts))
      .catch(console.error);
  }, []);

  return (
    <div className="app__container">
      <h1 className="app__title">PostContainer</h1>
      <section className="app__posts">
        {(posts || []).map((postItem, index) => (
          // <PostView key={index} title={postItem.title} body={postItem.body} />
          <PostView key={index} {...postItem} />
        ))}
      </section>
    </div>
  );
}
