import { css } from "@emotion/react";
import * as colors from "../../style/colors";
import * as fonts from "../../style/fonts";
import * as mq from "../../style/media-queries";

export const container = css({
  width: "100%",
  height: "10vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  letterSpacing: "1px",
  backgroundColor: "black",
  transition: ".3s",

  [mq.small]: {
    height: "12vh",
  },
});

export const title = css({
  fontSize: "1.2rem",
  color: colors.base,
  letterSpacing: "2px",
  fontFamily: fonts.primary,
  [mq.small]: {
    fontSize: "1.4rem",
  },
  [mq.medium]: {
    fontSize: "2rem",
  },
  [mq.large]: {
    fontSize: "2.3rem",
  },
});

export const icon = css({
  padding: "10px",
  fontSize: "3.5rem",
  color: colors.orange,
  transition: ".3s",
  ":hover": {
    color: "white",
  },
  [mq.medium]: {
    marginRight: "10px",
    fontSize: "4.3rem",
  },
});

export const span = css({
  color: colors.orange,
});
