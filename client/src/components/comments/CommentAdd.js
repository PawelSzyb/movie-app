import React, { Component } from "react";

class CommentAdd extends Component {
  state = {
    id: "",
    errors: {}
  };
  render() {
    return (
      <form>
        <div className="form-group mt-5">
          <label htmlFor="titleInput">Movie ID</label>
          <input
            type="text"
            className="form-control"
            id="idInput"
            placeholder="Enter ID"
            name="movie_id"
          />
          {/* {errors.title || errors.id ? (
            <div className="invalid-feedback">{errors.title || errors.id}</div>
          ) : null} */}
          <button
            type="submit"
            style={{ width: "100%" }}
            className="btn btn-primary mt-3 mb-3"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default CommentAdd;
