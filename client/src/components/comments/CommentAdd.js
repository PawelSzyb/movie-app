import React, { Component } from "react";
import axios from "axios";

class CommentAdd extends Component {
  state = {
    id: "",
    text: "",
    errors: {},
    result: ""
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitClick = e => {
    e.preventDefault();
    const { id } = this.state;
    const { text } = this.state;
    axios
      .post("/api/comments", { id, text })
      .then(comment => this.setState({ result: comment.data, errors: {} }))
      .then(() => this.props.commentAddHandler(this.state.result))
      .catch(err => this.setState({ errors: err.response.data }));
  };
  render() {
    const { errors } = this.state;
    return (
      <form>
        <div className="form-group mt-5">
          <label htmlFor="idInput">Movie ID</label>
          <input
            type="text"
            className={`form-control ${errors.movie ? "is-invalid" : ""}`}
            id="idInput"
            placeholder="Enter ID"
            name="id"
            onChange={this.onInputChange}
          />
          {errors.movie ? (
            <div className="invalid-feedback">{errors.movie}</div>
          ) : null}

          <label className="mt-3" htmlFor="comment-body">
            Comment:{" "}
          </label>
          <textarea
            onChange={this.onInputChange}
            className={`form-control ${errors.text ? "is-invalid" : ""}`}
            id="comment-body"
            name="text"
            rows="3"
          />
          {errors.text ? (
            <div className="invalid-feedback">{errors.text}</div>
          ) : null}
          <button
            type="submit"
            style={{ width: "100%" }}
            className="btn btn-primary mt-3 mb-3"
            onClick={this.onSubmitClick}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default CommentAdd;
