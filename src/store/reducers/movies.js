import * as actionTypes from "../actions/actionTypes";

const intialState = {
  movies: [],
  filteredMovies: []
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MOVIE:
      let moviesArray = [...state.movies, action.payload];
      return {
        ...state,
        movies: moviesArray,
        filteredMovies: moviesArray
      };
    case actionTypes.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie !== action.payload),
        filteredMovies: state.filteredMovies.filter(
          movie => movie !== action.payload
        )
      };
    case actionTypes.FILTER_MOVIE:
      return {
        ...state,
        filteredMovies: state.movies.filter(movie =>
          movie.title.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    case actionTypes.WATCH_STATUS:
      let movie = state.movies.find(movie => movie === action.payload);
      movie.watchStatus = !movie.watchStatus;
      console.log(movie);
      return {
        ...state,
        movies: [...state.movies]
      };
    default: {
      return state;
    }
  }
};

export default reducer;
