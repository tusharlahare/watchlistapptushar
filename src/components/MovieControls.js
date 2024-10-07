

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ movie, type }) => {
  const {
    removeMoviefromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMoviefromWatchlist(movie.imdbID)} // Use imdbID here
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button className="ctrl-btn" onClick={() => removeFromWatched(movie.imdbID)}>
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
