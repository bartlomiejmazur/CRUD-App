import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { container, title, icon, span } from "./NavBar.style";
import { FaSellsy } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <Link to={`/campaigns/list`}>
        <div css={container}>
          <FaSellsy css={icon} />
          <h1 css={title}>
            Campaign <span css={span}>Manager</span>
          </h1>
        </div>
      </Link>
    </>
  );
};

export default NavBar;
