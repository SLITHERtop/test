import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
       {!localStorage.getItem("AuthTest") ? (
        <>
        <Link to="/">Reg</Link>
        <Link to="/log">Log</Link>
        </>
  
      ) : null}
      <Link to="/store">Store</Link>
       {localStorage.getItem("AuthTest") ? (
      <button
        onClick={() => {
          localStorage.removeItem("AuthTest");
          window.location.reload();
        }}
      >
        log out
      </button>
      ) : null}
    </nav>
  );
};

export default Nav;
