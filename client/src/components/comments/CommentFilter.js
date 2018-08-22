import React, { Component } from "react";
import axios from "axios";

class CommentFilter extends Component {
  state = {
    idInput: "",
    results: [],
    errors: {}
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmtiClick = e => {
    e.preventDefault();
    const id = this.state.idInput;
    axios
      .get(`/api/comments/${id}`)
      .then(movies => this.setState({ results: movies.data, errors: {} }))
      .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { results, errors } = this.state;

    return (
      <div className="container mb-4" style={{ maxWidth: "800px" }}>
        <h1 className="text-center mt-5">Comment Filter</h1>
        <form>
          <div className="form-group mt-4">
            <label htmlFor="filterInput">Movie ID</label>
            <input
              type="text"
              className={`form-control ${errors.comments ? "is-invalid" : ""}`}
              id="filterInput"
              placeholder="Enter movie id"
              name="idInput"
              onChange={this.onInputChange}
            />
            {errors.comments ? (
              <div className="invalid-feedback">{errors.comments}</div>
            ) : null}
            <button
              type="submit"
              style={{ width: "100%" }}
              className="btn btn-primary mt-4 mb-3"
              onClick={this.onSubmtiClick}
            >
              Submit
            </button>
          </div>
        </form>
        <div>
          <ul className="list-group">
            {results.map(item => (
              <li key={item._id} className="list-group-item">
                {item.text}
                <div>{item.movie_id}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CommentFilter;
