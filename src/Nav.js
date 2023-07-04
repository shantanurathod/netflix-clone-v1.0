import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }

      return () => {
        window.removeEventListener("scroll");
      };
    });
  });
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar Logo"
      />
      <a
        href="https://github.com/shantanurathod/netflix-clone-v1.0"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="nav__github"
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="github"
        />
      </a>
    </div>
  );
};

export default Nav;
