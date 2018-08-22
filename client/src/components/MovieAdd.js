import React, { Component } from "react";
import axios from "axios";

class MovieAdd extends Component {
  onSubmitClick = () => {};

  render() {
    return (
      <form>
        <div className="form-group mt-5">
          <label htmlFor="titleInput">Movie Title</label>
          <input
            type="text"
            className="form-control"
            id="titleInput"
            placeholder="Enter title"
          />
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
