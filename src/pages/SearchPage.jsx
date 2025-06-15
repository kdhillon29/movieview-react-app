import { useNavigate, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetchMovies";
import MovieCardSkeleton from "../components/MovieCardSkelton";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import MoviesList from "../components/MoviesList";
const SearchPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("searchValue");

  const [searchInput, setSearchInput] = useState("");
  //   const setSearchValue = searchParams.set("searchValue");
  console.log("searchValue", searchValue);
  const {
    data: movies,
    error,
    loading,
  } = useFetch(
    `${import.meta.env.VITE_API_URL}&apikey=${
      import.meta.env.VITE_API_KEY
    }&s=${searchValue}`
  );
  console.log("movies", movies);
  console.log("error", error);
  console.log("loading", loading);
  const handleSearch = () => {
    // searchParams.set("searchValue", searchInput);
    setSearchInput("");
    navigate(`/search?searchValue=${searchInput}`);
  };
  const searchBarEnter = (e) => {
    if (e.key === "Enter" && window.document.hasFocus()) {
      handleSearch();
    }
  };
  return (
    <div className="relative container">
      <Link to="/" className="link__home">
        <h3 style={{ padding: "24px 12px" }}>
          <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
          Back
        </h3>
      </Link>

      <div
        style={{ marginTop: "50px", width: "100%", margin: "20px auto" }}
        className=""
      >
        <div className="movie__input--wrapper form__submit">
          <input
            type="text"
            style={{ width: "100%", position: "relative" }}
            className="movie__input"
            placeholder="Find a movie"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyUp={(e) => searchBarEnter(e)}
          />
          <i
            className="fa-solid fa-magnifying-glass movie__search"
            onClick={handleSearch}
            aria-hidden="true"
          ></i>
        </div>
      </div>

      {movies && !movies.Search?.length && !loading && (
        <div
          className="container"
          style={{ marginTop: "50px", color: "white", textAlign: "center" }}
        >
          <h2>No Movies Found</h2>
        </div>
      )}

      {loading ? (
        <div
          style={{
            display: "flex",
            width: "100%",

            justifyContent: "start",
            alignItems: "start",
            flexWrap: "wrap",
            gap: "18px",
          }}
        >
          {new Array(6).fill(0).map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        movies?.Search?.length > 0 && (
          <MoviesList movies={movies} searchValue={searchValue} />
        )
      )}
    </div>
  );
};
export default SearchPage;
