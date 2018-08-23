import React, { Component } from "react";
import axios from "axios";

import MovieAdd from "./MovieAdd";

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
  addMovie = movie => {
    let movies = [...this.state.results, movie];
    this.setState({
      results: movies
    });
  };
  render() {
    const movies = this.state.results;
    return (
      <div className="container mb-5" style={{ maxWidth: "800px" }}>
        <MovieAdd addMovie={this.addMovie} />
        <h1 className="text-center mt-5 mb-3">Movies List</h1>
        <div className="results">
          {movies.map(item => (
            <div className="card" key={item.movie_id}>
              <div className="card-header" id="heading">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link "
                    type="button"
                    style={{ width: "100%" }}
                    data-toggle="collapse"
                    data-target={`#collapse${item.movie_id}`}
                    aria-expanded="false"
                  >
                    {item.movie.Title}
                  </button>
                </h5>
              </div>

              <div id={`collapse${item.movie_id}`} className="collapse">
                <img
                  className="card-img-top img-fluid"
                  style={{
                    height: "330px",
                    width: "310px",
                    margin: "10px auto",
                    display: "block"
                  }}
                  src={item.movie.Poster}
                  alt="Movie"
                />
                <div className="card-body">
                  {item.movie.Plot}
                  <div className="mt-3">Actors: {item.movie.Actors}</div>
                  <div className="mt-3">Type: {item.movie.Type}</div>
                  <div className="mt-3">Movie ID: {item.movie_id}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
