import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="app__navbar">
      <div className="app__navbar-head">
        <p className="head-text">Contests</p>
      </div>

      <ul className="app__navbar-platforms">
        {["All", "Codeforces", "Leetcode", "Codechef"].map((platform) => (
          <a
            key={`link-${platform}`}
            href={`#${platform}`}
            className={`app__flex app__navbar-platform ${active === platform && `active`}`}
            onClick={() => setActive(platform)}
          >
            <p>{platform}</p>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
