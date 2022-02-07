import React from 'react';
import { Rating } from '@mui/material';
import "./MovieCard.css";

const MovieCard = ({movie, deleteMovie}) => {
  return <div>
	<div className="wrapper">
  <div className="main_card">
    <div className="card_left">
      <div className="card_datails">
        <h1>{movie.name}</h1>
        <div className="card_cat">
          <p className="year">{movie.date}</p>
          <p className="genre">{movie.type} </p>
          {/* <p class="time">2h 28m</p> */}
        </div>
        <p className="disc">{movie.description}</p>
        <a href="https://www.imdb.com/title/tt4912910/" target="_blank">Read More</a>
		<Rating name="read-only" value={movie.rating} readOnly />
    <button onClick={() => deleteMovie(movie.id) }>X</button>
      </div>
    </div>
    <div className="card_right">
      <div className="img_container">
        <img src={movie.image} alt={movie.image}/>
        </div>
        <div className="play_btn">
          <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
            <i className="fas fa-play-circle"></i>
            
          </a>
        </div>
      </div>
    </div>
  </div>



{/* <!-- FOLLOW -->
<a class="Follow" href="https://codepen.io/ZaynAlaoudi/" target="blank_"/> */}
  </div>;
};

export default MovieCard;

