import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetchMovies";
import MovieDetailSkelton from "../components/MovieDetailSkelton";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
const MoviePage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const {
    data: movie,
    error,
    loading,
  } = useFetch(
    `${import.meta.env.VITE_API_URL}&apikey=${
      import.meta.env.VITE_API_KEY
    }&i=${movieId}`
  );
  console.log("movie", movie, error, loading);
  return (
    <div className="container">
      <Link onClick={() => navigate(-1)} className="link__home">
        <h3
          style={{ padding: "12px 10px", fontSize: "16px" }}
          className="link__home--text"
        >
          <i className="fa-solid fa-arrow-left" aria-hidden="true"></i> Back
        </h3>
      </Link>

      {loading || error ? (
        <MovieDetailSkelton />
      ) : (
        <div className="container-item">
          <div className="img-left-side">
            <img
              className="img-left-side--img"
              src={movie?.Poster}
              alt={movie?.Title}
            />
          </div>
          <div className="detail-right-side">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "space-between",
                gap: "24px",
              }}
            >
              <h1>{movie?.Title}</h1>
              <span>{movie?.Released}</span>
            </div>
            <p>{movie?.Plot}</p>
            <button
              style={{
                width: "90%",
                margin: "28px auto",
                backgroundColor: "#003554",
                opacity: 0.8,
                color: "white",
              }}
              disabled
            >
              Watch
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default MoviePage;
