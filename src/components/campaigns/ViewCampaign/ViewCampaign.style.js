import { css } from "@emotion/react";
import styled from "@emotion/styled";

import * as fonts from "../../../style/fonts";
import * as colors from "../../../style/colors";

const title = css({
  margin: "10px",
  color: colors.orange,
  textAlign: "center",
  fontFamily: fonts.primary,
  letterSpacing: "1px",
  fontWeight: "bold",
});

const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(8, 1fr)",
  rowGap: "10px",
});

const Content = styled.span(
  {
    // textAlign: "right",
    marginLeft: "20px",
    gridColumn: "2/-1",
    fontSize: "1rem",
    fontWeight: "bold",
    fontFamily: fonts.primary,
    letterSpacing: "1px",
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

export { Grid, Item, Content, title };
