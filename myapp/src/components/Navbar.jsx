import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>
          <HighlightIcon />
          Keeper
        </h1>
        <div className="nav-item">
          {/* <a href="">Portfolio</a> */}
          <a href="https://github.com/Webdevava/"><img src="https://github.com/Webdevava.png" alt="" /></a>
          {/* <a href="">About</a> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
