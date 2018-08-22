import React, { Component } from "react";
import axios from "axios";

import CommentAdd from "../comments/CommentAdd";

class CommentList extends Component {
  state = {
    results: []
  };
  componentDidMount() {
    axios
      .get("/api/comments")
      .then(movies => this.setState({ results: movies.data }))
      .catch(err => console.log(err));
  }
  render() {
    const comments = this.state.results;
    return (
      <div style={{ maxWidth: "800px" }} className="container">
        <CommentAdd />
        <h1 className="text-center mt-5 mb-3">Comment List</h1>
        <ul className="list-group">
          {comments.map(item => (
            <li key={item._id} className="list-group-item">
              Comment: {item.text}
              <div>Movie ID: {item.movie_id}</div>
            </li>
          ))}
        </ul>
        <div />
      </div>
    );
  }
}

export default CommentList;
