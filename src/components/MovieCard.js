import React from 'react'
import { MovieControls } from './MovieControls';

export const MovieCard = ({movie, type}) => {
  return (
    <div className='movie-card'>
        <div className='overlay'>   </div>
        {movie.Poster !== "N/A" ? (
          <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        ) : (
          <div className="filler-poster"></div>
        )};
      
      <MovieControls type={type} movie={movie}/>
    </div>
  );
};
