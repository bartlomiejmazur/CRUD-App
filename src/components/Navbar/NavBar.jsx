import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { container, title, icon, span } from "./NavBar.style";

const NavBar = () => {
  return (
    <>
      <Link to={`/campaigns/list`}>
        <div css={container}>
          <i css={icon} className="fa-brands fa-sellsy"></i>
          <h1 css={title}>
            Campaign <span css={span}>Manager</span>
          </h1>
        </div>
      </Link>
    </>
  );
};

export default NavBar;
