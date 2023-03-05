import { css } from "@emotion/react";
import styled from "@emotion/styled";

import * as fonts from "../../../style/fonts";
import * as colors from "../../../style/colors";
import * as mq from "../../../style/media-queries";

const title = css({
  margin: "10px",
  color: colors.orange,
  textAlign: "center",
  fontFamily: fonts.primary,
  letterSpacing: "1px",
  fontWeight: "bold",
  [mq.medium]: {
    fontSize: "1.2rem",
    letterSpacing: "2px",
    margin: "20px",
  },
  [mq.medium]: {
    fontSize: "2.7rem",
  },
  [mq.large]: {
    fontSize: "2rem",
  },
});

const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(8, 1fr)",
  rowGap: "10px",
  [mq.medium]: {
    rowGap: "25px",
    padding: "30px",
  },
  [mq.large]: {
    rowGap: "30px",
    padding: "30px",
  },
});

const Content = styled.span(
  {
    marginLeft: "20px",
    gridColumn: "2/-1",
    fontSize: "1rem",
    fontWeight: "bold",
    fontFamily: fonts.primary,
    letterSpacing: "1px",
    [mq.medium]: {
      fontSize: "2rem",
    },
    [mq.large]: {
      fontSize: "1.2rem",
    },
  },
  ({ variant = "" }) => contentVariant[variant]
);

const contentVariant = {
  name: {
    gridRow: "1",
  },
  keywords: {
    gridRow: "2",
  },
  bid: {
    gridRow: "3",
  },
  fund: {
    gridRow: "4",
  },
  status: {
    gridRow: "5",
  },
  town: {
    gridRow: "6",
  },
  radius: {
    gridRow: "7",
  },
};

const Item = styled.div(
  {
    gridColumn: "1/-1",
    borderBottom: "1px solid black",
    fontSize: "1rem",
    fontWeight: "bold",
    fontFamily: fonts.secondary,
    letterSpacing: "1px",
    [mq.medium]: {
      fontSize: "2rem",
    },
  },
  ({ variant = "" }) => itemVariant[variant]
);

const itemVariant = {
  name: {
    gridRow: "1",
  },
  keywords: {
    gridRow: "2",
  },
  bid: {
    gridRow: "3",
  },
  fund: {
    gridRow: "4",
  },
  status: {
    gridRow: "5",
  },
  town: {
    gridRow: "6",
  },
  radius: {
    gridRow: "7",
  },
};

const center = css({
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [mq.medium]: {
    height: "88vh",
  },
  [mq.large]: {
    height: "88vh",
  },
});

export { Grid, Item, Content, title, center };
