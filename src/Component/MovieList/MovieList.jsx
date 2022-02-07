import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({movies, text, rate, deleteMovie}) => {
  const filtred=
    movies.filter(
      (movie)=>movie.name.toUpperCase().includes(text.toUpperCase()) 
      && movie.rating >= rate  );

  

  return <div>
     {filtred.length ? (
    filtred.map((movie)=> (
      <MovieCard movie={movie} key={movie.id} deleteMovie={deleteMovie} /> 
    ))):(
      <h1>There is no movie to show</h1>
    )
      }
  </div>;
};

export default MovieList;
