import React, { Component } from "react";
import axios from "axios";

class MovieAdd extends Component {
  state = {
    title: "",
    errors: {},
    movie: {}
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitClick = e => {
    e.preventDefault();
    const title = this.state.title;
    axios
      .post("/api/movies", { title })
      .then(movie =>
        this.setState({
          movie: movie.data,
          errors: {}
        })
      )
      .then(() => this.props.addMovie(this.state.movie))
      .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { errors } = this.state;
    return (
      <form>
        <div className="form-group mt-5">
          <label htmlFor="titleInput">Movie Title</label>
          <input
            type="text"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            id="titleInput"
            placeholder="Enter title"
            name="title"
            onChange={this.onInputChange}
          />
          {errors.title ? (
            <div className="invalid-feedback">{errors.title}</div>
          ) : null}
          <button
            type="submit"
            onClick={this.onSubmitClick}
            className="btn btn-primary mt-3 mb-3"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default MovieAdd;
