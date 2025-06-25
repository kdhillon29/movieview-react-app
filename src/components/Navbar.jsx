import React, { useRef, useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000); // 500ms delay/
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchTerm) return;
    navigate(`/search?searchValue=${searchTerm}`);
    setSearchTerm("");
  }, [debouncedSearchTerm]);

  const searchActive = () => {
    searchRef.current.focus();
    // if (searchTerm) {
    //   setSearchTerm("");
    // }
    // navigate(`/search?searchValue=${searchTerm}`);
  };

  return (
    <nav>
      <div className="nav__content">
        <div className="nav__left">
          <Link to="/">
            <figure className="nav__logo--wrapper">
              <img src="/movielogo.png" alt="" className="nav__logo" />
            </figure>
          </Link>
          <Link to="/" className="nav__link">
            Home
          </Link>
        </div>
        <div className="nav__right">
          <div className="nav__input--wrapper">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="nav__input"
              placeholder="Find a movie"
              ref={searchRef}
              onKeyUp={(e) => {
                if (e.key === "Enter" && window.document.hasFocus()) {
                  searchActive();
                }
              }}
            />
            <i
              className="fa-solid fa-magnifying-glass nav__search"
              onClick={searchActive}
              aria-hidden="true"
            ></i>
          </div>
          <Link to="/contact" className="nav__link">
            <i
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                marginTop: "4px",
                marginRight: "2px",
                fontSize: "24px",
              }}
              className="fa-solid fa-envelope nav__link"
              aria-hidden="true"
            ></i>
          </Link>
          {/* <i className="fa-solid fa-gear nav__settings" aria-hidden="true"></i> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
