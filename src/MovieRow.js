import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class MovieRow extends Component {
  render() {
    // let movie = this.props.movies.find(movie => movie === this.props.movie);
    let movie = this.props.movie;
    return (
      <tr>
        <td>{movie.title}</td>
        <td>
          <div>
            {movie.watchStatus ? (
              <button
                className="btn btn-warning"
                onClick={() => this.props.watchStatus(movie)}
              >
                Unwatch
              </button>
            ) : (
              <button
                className="btn btn-info"
                onClick={() => this.props.watchStatus(movie)}
              >
                Watch
              </button>
            )}
          </div>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.deleteMovie(movie)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.rootMovies.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    watchStatus: movie => dispatch(actionCreators.watchStatus(movie)),
    deleteMovie: movie => dispatch(actionCreators.deleteMovie(movie))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieRow);
