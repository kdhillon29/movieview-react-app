import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const Hero = ({ setSearchValue }) => {
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  const handleSearchBarClick = () => {
    if (!searchResult) alert("Please enter a search term");
    navigate(`/search?searchValue=${searchResult}`);
    setSearchValue(searchResult);
  };

  const searchBarEnter = (e) => {
    if (e.key === "Enter" && window.document.hasFocus()) {
      handleSearchBarClick();
    }
  };

  return (
    <section id="landing">
      <div className="movie__background">
        <figure className="movie__background--wrapper">
          {/* <Navbar /> */}
          {/* <img
            src="assets/moviebackground.jpg"
            alt=""
            className="movie__background--img"
          /> */}
          <div className="movie__background--text">
            <h1 className="movie__background--title">
              Ticket<span className="textcolor">+</span>
            </h1>
            <h3 className="movie__background--para">
              With over <span className="textcolor">3000</span> movies on Ticket
              <span className="textcolor">+</span>, the possibilites are
              endless!
            </h3>
            <div className="movie__background--search">
              <div className="movie__input--wrapper form__submit">
                <input
                  type="text"
                  className="movie__input"
                  placeholder="Find a movie"
                  value={searchResult}
                  onChange={(e) => setSearchResult(e.target.value)}
                  onKeyUp={(e) => searchBarEnter(e)}
                />
                <i
                  className="fa-solid fa-magnifying-glass movie__search"
                  onClick={handleSearchBarClick}
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
