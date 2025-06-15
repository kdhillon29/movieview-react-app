import MovieCard from "./MovieCard";
import posterTest from "../assets/postertest.jpg";
import posterTest2 from "../assets/postertest2.jpg";
import posterTest3 from "../assets/postertest3.jpg";
import posterTest4 from "../assets/postertest4.jpg";
import posterTest5 from "../assets/postertest5.jpg";
import posterTest6 from "../assets/postertest6.jpg";
// import { useState, useEffect } from "react";

const MoviesList = ({ movies, searchValue }) => {
  const initialMoviesData = [
    {
      Title: "Guardians of The Galaxy Vol. 2",
      Poster: posterTest,
      length: "136m",
      rating: "4.5",
      language: "English",
      imdbID: "tt3896198",
    },
    {
      Title: "The Avengers",
      Poster: posterTest2,
      length: "126m",
      rating: "4.3",
      language: "English",
      imdbID: "tt0848228",
    },
    {
      Title: "Spider-Man: Homecoming",
      Poster: posterTest3,
      length: "134m",
      rating: "4.4",
      language: "English",
      imdbID: "tt1454829",
    },
    {
      Title: "Minions: Rise of Gru",
      Poster: posterTest4,
      length: "128m",
      rating: "4.9",
      language: "English",
      imdbID: "tt1228705",
    },
    {
      Title: "Spider-Man: Into the Spider-Verse",
      Poster: posterTest5,
      length: "136`m",
      rating: "4.9",
      language: "English",
      imdbID: "tt1300854",
    },
    {
      Title: "Nope",
      Poster: posterTest6,
      length: "256m",
      rating: "4.1",
      language: "English",
    },
  ];

  return (
    <section id="movies">
      <div className="container">
        <div className="row">
          <div className="movies__content">
            <div className="movies__top">
              <h2 style={{ color: "white", margin: "2px 12px" }} className="">
                {searchValue && "Search results for:"} {searchValue}
              </h2>
            </div>
            <div className="movies__list">
              <i
                className="fa-solid fa-spinner movies__list--loading"
                aria-hidden="true"
              ></i>
              {movies &&
                (movies.Search?.length > 0
                  ? movies.Search.map((movie, index) => (
                      <MovieCard movie={movie} key={index} />
                    ))
                  : searchValue && (
                      <p className="movies__list--no-movies">
                        No movies found for {searchValue}
                      </p>
                    ))}
              {!searchValue &&
                initialMoviesData.map((movie, index) => (
                  <MovieCard movie={movie} key={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MoviesList;
