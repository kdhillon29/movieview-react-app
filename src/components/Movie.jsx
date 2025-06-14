import React from "react";

const Movie = ({ movie }) => {
  console.log("movie", movie);
  return (
    <div className="movie">
      <figure className="movie__img--wrapper">
        <img src={movie.img} alt="" className="movie__img" />
        {/* <img src="assets/postertest.jpg" alt="" className="movie__img" />/ */}
        <h3 className="movie__info--title">{movie.title}</h3>
        <div className="movie__info--list">
          <div className="movie__info movie__info1">
            <i
              className="fa-solid fa-clock movie__info--icon"
              aria-hidden="true"
            ></i>
            <p className="movie__info--text">{movie.length}</p>
          </div>
          <div className="movie__info movie__info2">
            <i
              className="fa-solid fa-star movie__info--icon"
              aria-hidden="true"
            ></i>
            <p className="movie__info--text">{movie.rating}</p>
          </div>
          <div className="movie__info movie__info3">
            <i
              className="fa-solid fa-earth-americas movie__info--icon"
              aria-hidden="true"
            ></i>
            <p className="movie__info--text">{movie.language}</p>
          </div>
        </div>
      </figure>
      <h4 className="movie__title">{movie.title}</h4>
    </div>
  );
};

export default Movie;
