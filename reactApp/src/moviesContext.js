import React, { createContext, useEffect, useReducer, useContext } from "react";
import { getMovies } from "./api/movie-api";
import { AuthContext } from './authContext';

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result };
    default:
      return state;
  }
};

const MoviesContextProvider = props => {
  const context = useContext(AuthContext);

  const [state, dispatch] = useReducer(reducer, { movies: []});

  useEffect(() => {
    getMovies().then(result => {
      dispatch({ type: "load", payload: {result}});
    });
  },[context.isAuthenticated]);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider