import React, { useState } from "react";

const Navbar = () => {
  const [searchResult, setSearchResult] = useState([]);

  const searchActive = () => {
    setTimeout(() => {
      console.log("searchActive");
    }, 100);
  };

  return (
    <nav>
      <div className="nav__content">
        <div className="nav__left">
          <figure className="nav__logo--wrapper">
            <img src="assets/movielogo.png" alt="" className="nav__logo" />
          </figure>
          <a href="#home" className="nav__link">
            Home
          </a>
          <a href="" className="nav__link">
            Contact
          </a>
        </div>
        <div className="nav__right">
          <div className="nav__input--wrapper">
            <input
              type="text"
              value={searchResult}
              onChange={(e) => setSearchResult(e.target.value)}
              className="nav__input"
              placeholder="Find a movie"
            />
            <i
              className="fa-solid fa-magnifying-glass nav__search"
              onClick={searchActive}
              aria-hidden="true"
            ></i>
          </div>
          <i className="fa-solid fa-gear nav__settings" aria-hidden="true"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
