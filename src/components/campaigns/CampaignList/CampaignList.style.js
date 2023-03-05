import styled from "@emotion/styled";
import { css } from "@emotion/react";

import * as colors from "../../../style/colors";
import * as fonts from "../../../style/fonts";

const title = css({
  fontSize: "1rem",
  fontFamily: fonts.primary,
  letterSpacing: "1px",
  padding: "0 10px",
});

const spinner = css({
  marginTop: "20px",
  width: "100%",
  fontSize: "2rem",
});

export { title, spinner };
