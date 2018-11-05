import React, { Component } from "react";

import MovieRow from "./MovieRow";
import MovieSearch from "./MovieSearch";

import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class MovieTable extends Component {
  render() {
    let filteredRow = this.props.filteredMovies.filter(
      movie => movie.watchStatus === this.props.condition
    );
    let movieRows = filteredRow.map(movie => (
      <MovieRow key={movie.title} movie={movie} />
    ));
    return (
      <table className="mt-3 table">
        <thead>
          <tr>
            <MovieSearch />
          </tr>
        </thead>
        <tbody>{movieRows}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    filteredMovies: state.rootMovies.filteredMovies,
    movies: state.rootMovies.movies
  };
};

export default connect(mapStateToProps)(MovieTable);
