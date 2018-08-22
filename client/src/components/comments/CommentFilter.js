import React, { Component } from "react";
import axios from "axios";

class CommentFilter extends Component {
  state = {
    idInput: "",
    results = []
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmtiClick = e => {
    e.preventDefault();
    const id = this.state.idInput;
    axios
      .get(`/api/comments/${id}`)
      .then(movies => this.setState({results: movies.data}))
      .catch(err => console.log(err.response.data));
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">Comment Filter</h1>
        <form>
          <div className="form-group mt-4">
            <label htmlFor="filterInput">Movie ID</label>
            <input
              type="text"
              className="form-control"
              id="filterInput"
              placeholder="Enter movie id"
              name="idInput"
              onChange={this.onInputChange}
            />
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
      </div>
    );
  }
}

export default CommentFilter;
