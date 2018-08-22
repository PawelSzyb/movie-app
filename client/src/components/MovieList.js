import React, { Component } from "react";
import axios from "axios";

class MovieList extends Component {
  state = {
    results: []
  };
  componentDidMount() {
    axios
      .get("/api/movies")
      .then(movies => this.setState({ results: movies.data }))
      .catch(err => console.log(err));
  }
  render() {
    const movies = this.state.results;
    return (
      <div className="container">
        <h1 className="text-center mt-5 mb-3">Movie List</h1>
        <div className="results">
          {movies.map(item => (
            <div className="card" key={item.movie_id}>
              <div className="card-header" id="heading">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    style={{ width: "100%" }}
                    data-toggle="collapse"
                    data-target={`#collapse${item.movie_id}`}
                  >
                    {item.movie.Title}
                  </button>
                </h5>
              </div>

              <div id={`collapse${item.movie_id}`} className="collapse show">
                <div className="card-body">{item.movie.Plot}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
