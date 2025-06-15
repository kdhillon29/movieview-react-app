import React from "react";
import Hero from "../components/Hero";
import MoviesList from "../components/MoviesList";

const HomePage = () => {
  return (
    <div className="relative">
      <Hero />
      <MoviesList />
    </div>
  );
};

export default HomePage;
