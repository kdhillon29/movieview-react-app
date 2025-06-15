function MovieCardSkeleton() {
  return (
    <div
      style={{
        width: "25%",
        // media: "(max-width: 768px)",
      }}
    >
      <div className="movie_list-skeleton">
        <img alt="" className="img-load-skeleton" />
        <h4 className="title-loading-skeleton"></h4>
        <span className="detail-list-skeleton"></span>
      </div>
    </div>
  );
}
export default MovieCardSkeleton;
