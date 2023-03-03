import { css } from "@emotion/react";
import * as colors from "../../style/colors";
import * as fonts from "../../style/fonts";

export const container = css({
  width: "100%",
  height: "10vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  letterSpacing: "1px",
  backgroundColor: "black",
});

export const title = css({
  fontSize: "1.2rem",
  color: colors.base,
  letterSpacing: "2px",
  fontFamily: fonts.primary,
});

export const icon = css({
  padding: "10px",
  fontSize: "1.5rem",
  color: colors.orange,
});

export const span = css({
  color: colors.orange,
});
