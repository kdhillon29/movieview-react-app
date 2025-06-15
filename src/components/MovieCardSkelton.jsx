function MovieCardSkeleton() {
  return (
    <div className="movie-card-skelton">
      <div className="movie_list-skeleton">
        <img alt="" className="img-load-skeleton" />
        <h4 className="title-loading-skeleton"></h4>
        <span className="detail-list-skeleton"></span>
      </div>
    </div>
  );
}
export default MovieCardSkeleton;
