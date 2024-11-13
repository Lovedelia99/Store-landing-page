import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px",
        margin: "0px",
        display: "flex",
        justifyContent: "space-around",
        position: "fixed",
        width: "210vh",
      }}
    >
      <nav>
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
      </nav>

      <nav>
        <Link to="/products" style={{ color: "black", textDecoration: "none" }}>
          Store
        </Link>
      </nav>

      <nav>
        <Link
          to="/cart"
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          Cart
        </Link>
      </nav>

      <nav>
        <Link to="/about" style={{ color: "black", textDecoration: "none" }}>
          About
        </Link>
      </nav>

      <nav>
        <Link to="/reg" style={{ color: "black", textDecoration: "none" }}>
          Register
        </Link>
      </nav>
    </div>
  );
}

export default Header;
