import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class MovieSearch extends Component {
  handleChange(query) {
    console.log(query);
    this.props.filterMovie(query);
  }

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            onChange={event => this.handleChange(event.target.value)}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filteredMovies: state.rootMovies.filteredMovies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterMovie: query => dispatch(actionCreators.filterMovie(query))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSearch);
