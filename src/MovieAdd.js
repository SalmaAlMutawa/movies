import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class MovieAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMovieTitle: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    let tempMovie = { title: this.state.newMovieTitle, watchStatus: false };
    this.props.addMovie(tempMovie);
  }

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            onChange={event =>
              this.setState({ newMovieTitle: event.target.value })
            }
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon
                icon={faPlusCircle}
                onClick={this.handleChange}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMovie: movie => dispatch(actionCreators.addMovie(movie))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(MovieAdd);
