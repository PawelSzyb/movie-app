import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
  commentAddHandler = comment => {
    let comments = [...this.state.results, comment];
    this.setState({ results: comments });
  };
  render() {
    const comments = this.state.results;
    return (
      <div style={{ maxWidth: "800px" }} className="container">
        <CommentAdd commentAddHandler={this.commentAddHandler} />
        <Link
          className="btn btn-primary"
          style={{ width: "100%" }}
          to="/comments/filter"
        >
          Click to filter comments by ID{" "}
        </Link>
        <h1 className="text-center mt-5 mb-3">Comment List</h1>
        <ul className="list-group mb-5">
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
