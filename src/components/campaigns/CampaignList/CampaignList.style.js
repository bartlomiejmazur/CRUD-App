import styled from "@emotion/styled";
import { css } from "@emotion/react";

import * as colors from "../../../style/colors";
import * as fonts from "../../../style/fonts";

const containerVairant = {
  border: {
    backgroundColor: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },
};

const Container = styled.section(
  {
    width: "90%",
    margin: "10px auto",
    padding: "20px",
  },
  ({ variant = "" }) => containerVairant[variant]
);

const FormGroup = styled.div({
  display: "flex",
  flexDirection: "column",
});

const titleSecondary = css({
  fontSize: "1rem",
  fontFamily: fonts.secondary,
  padding: "10px",
});

const titlePrimary = css({
  fontSize: "1rem",
  letterSpacing: "1px",
  padding: "10px",
  fontFamily: fonts.primary,
});

const flex = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

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
  },
};

const Button = styled.button(
  {
    fontSize: ".8rem",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: fonts.primary,
    letterSpacing: "2px",
    padding: "10px 15px",
    backgroundColor: colors.indigo,
    borderRadius: "10px",
    color: colors.base,
    border: "none",
  },
  ({ variant = "primary" }) => buttonVariants[variant]
);

const Input = styled.input({
  margin: "10px 0",
  borderRadius: "3px",
  border: "1px solid #f1f1f4",
  background: "#fff",
  padding: "8px 12px",
});

export {
  Container,
  FormGroup,
  titleSecondary,
  titlePrimary,
  flex,
  Button,
  Input,
};
