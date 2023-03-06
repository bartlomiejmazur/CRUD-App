import styled from "@emotion/styled";
import { css } from "@emotion/react";

import * as fonts from "../../style/fonts";
import * as colors from "../../style/colors";
import * as mq from "../../style/media-queries";

const Button = styled.button(
  {
    fontSize: ".8rem",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: fonts.primary,
    letterSpacing: "2px",
    padding: "10px 25px",
    backgroundColor: colors.indigo,
    borderRadius: "10px",
    color: colors.base,
    border: "none",
    cursor: "pointer",
    transition: ".3s",
    ":hover": {
      background: colors.indigoDarken10,
    },
    [mq.medium]: {
      fontSize: "2rem",
    },
    [mq.large]: {
      fontSize: "1.4rem",
    },
  },
  ({ variant = "" }) => buttonVariants[variant]
);
const buttonVariants = {
  primary: {
    background: "transparent",
    border: `1px solid ${colors.gray80}`,
    color: colors.gray80,
  },
  secondary: {
    background: "#f1f2f7",
    color: "#434449",
  },
  green: {
    background: "green",
    color: "white",
    transition: ".3s",
    ":hover": {
      background: colors.gray80,
    },
  },
  danger: {
    background: colors.danger,
    color: "white",
    ":hover": {
      background: "red",
    },
  },
  gray: {
    background: colors.gray80,
    color: "white",
    transition: ".3s",
    ":hover": {
      background: "black",
    },
  },
  orange: {
    background: colors.orange,
    color: "black",
    padding: "10px 20px",
  },
};

export { Button };
