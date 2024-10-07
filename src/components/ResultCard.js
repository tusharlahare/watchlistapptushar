import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Watched } from "./Watched";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieWatched, watchlist, watched,  } = useContext(GlobalContext);
  const [isDisabled, setIsDisabled] = useState(false); 

  let storedMovie = watchlist.find((o) => o.imdbID === movie.imdbID); 

   let storedMovieWatched = watched.find((o) => o.imdbID === movie.imdbID); 

  const handleAddToWatchlist = () => {
    addMovieToWatchlist(movie);
    setIsDisabled(true); 
  };



  
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster !== "N/A" ? (
          <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.Title}</h3>
          <h4 className="date">{movie.Year ? movie.Year : "-"}</h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={isDisabled || !!storedMovie} 
            onClick={handleAddToWatchlist}
          >
            ADD TO WATCHLIST
          </button>
        </div>
      </div>
    </div>
  );
};





