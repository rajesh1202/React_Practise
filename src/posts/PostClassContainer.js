import React from "react";

export default class PostClassContainer extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((postList) => {
        this.setState({ posts: postList });
      });
  }

  render() {
    return (
      <div className="app__container">
        <h1 className="app__title">PostContainer</h1>
        <section className="app__posts">
          {(this.state.posts || []).map((postItem, index) => (
            <div>
              <h4>{postItem.title}</h4>
              <p>{postItem.body}</p>
            </div>
          ))}
        </section>
      </div>
    );
  }
}
