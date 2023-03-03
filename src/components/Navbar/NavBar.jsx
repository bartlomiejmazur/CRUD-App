import React from "react";
import { css } from "@emotion/react";
import { container, title, icon, span } from "./NavBar.style";

const NavBar = () => {
  return (
    <>
      <div css={container}>
        <i css={icon} className="fa-brands fa-sellsy"></i>
        <h1 css={title}>
          Campaign <span css={span}>Manager</span>
        </h1>
      </div>
    </>
  );
};

export default NavBar;
