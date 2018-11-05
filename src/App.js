import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import MovieAdd from "./MovieAdd";
import MovieTable from "./MovieTable";

import * as actionCreators from "./store/actions/index";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    let watch = this.props.movies.filter(movie => !movie.watchStatus);
    let unwatched = this.props.movies.filter(movie => movie.watchStatus);
    return (
      <div className="App">
        <div className="row">
          <MovieAdd />
        </div>
        <div className="row">
          <div className="col">
            <h4>Watchlist {watch.length}</h4>
            <MovieTable condition={false} />
          </div>
          <div className="col">
            <h4>Watched {unwatched.length}</h4>
            <MovieTable condition={true} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.rootMovies.movies
  };
};

export default connect(mapStateToProps)(App);
