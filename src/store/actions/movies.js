import * as actionTypes from "./actionTypes";

export const addMovie = movie => {
  return {
    type: actionTypes.ADD_MOVIE,
    payload: movie
  };
};

export const deleteMovie = movie => {
  return {
    type: actionTypes.DELETE_MOVIE,
    payload: movie
  };
};

export const filterMovie = query => {
  return {
    type: actionTypes.FILTER_MOVIE,
    payload: query
  };
};

export const watchStatus = movie => {
  return {
    type: actionTypes.WATCH_STATUS,
    payload: movie
  };
};
