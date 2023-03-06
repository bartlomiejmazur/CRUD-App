import styled from "@emotion/styled";
import { css } from "@emotion/react";
import * as colors from "../../../../style/colors";
import * as fonts from "../../../../style/fonts";
import * as mq from "../../../../style/media-queries";

const container = css({
  width: "100%",
  margin: "20px auto",
  padding: "15px",
  display: "grid",
  fontFamily: fonts.secondary,
  backgroundColor: "#fff",
  fontSize: "1rem",
  fontWeight: "bold",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  columnGap: "5px",
  rowGap: "5px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  [mq.small]: {
    width: "400px",
    fontSize: "1.3rem",
  },
  [mq.large]: {
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    columnGap: "10px",
    rowGap: "10px",
    padding: "20px",
  },
});

const icon = css({
  height: "100%",
  fontSize: "1rem",
  color: "white",
  [mq.small]: {
    fontSize: "1.5rem",
  },
  [mq.large]: {
    fontSize: "1.4rem",
  },
});

const itemTitle = css({
  fontFamily: fonts.primary,
  fontSize: "1.3rem",
  letterSpacing: "1px",
  gridColumn: "1/-1",
  gridRow: 1,
  margin: "0 auto",
  [mq.small]: {
    fontSize: "1.5rem",
  },
});

const itemBid = css({
  padding: "5px",
  gridColumn: "1/-1",
  gridRow: 2,
  borderBottom: `1px solid ${colors.gray80}`,
  [mq.large]: {
    gridColumn: "1/4",
  },
});

const itemStatus = css({
  padding: "5px",
  gridColumn: "1/-1",
  gridRow: 3,
  borderBottom: `1px solid ${colors.gray80}`,
  [mq.large]: {
    gridColumn: "1/4",
  },
});

const itemTown = css({
  padding: "5px",
  gridColumn: "1/-1",
  gridRow: 4,
  borderBottom: `1px solid ${colors.gray80}`,
  [mq.large]: {
    gridColumn: "1/4",
  },
});

const buttonsVariant = {
  view: {
    color: colors.base,
    backgroundColor: colors.orange,
    gridColumn: "1 / 2",
    gridRow: 5,

    [mq.large]: {
      gridRow: "2",
    },
  },
  edit: {
    color: colors.base,
    backgroundColor: colors.indigo,
    gridColumn: "3 / 4",
    gridRow: 5,
    ":hover": {
      backgroundColor: colors.indigoDarken10,
    },
    [mq.large]: {
      gridRow: "3",
    },
  },
  delete: {
    color: colors.base,
    backgroundColor: colors.danger,
    gridColumn: "5 / 6",
    gridRow: 5,
    ":hover": {
      backgroundColor: "red",
    },
    [mq.large]: {
      gridRow: "4",
    },
  },
};

const CircleButton = styled.button(
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30px",
    border: "none",
    borderRadius: "5px",
    fontSize: ".9rem",
    cursor: "pointer",
    transition: ".3s",
    ":hover": {
      backgroundColor: colors.gray80,
    },
    [mq.small]: {
      height: "50px",
    },
    [mq.large]: {
      height: "40px",
      width: "40",
      gridColumn: "4/5",
    },
  },
  ({ variant = "" }) => buttonsVariant[variant]
);

const link = css({
  width: "100%",
  height: "100%",
});

const bgc = css({
  position: "fixed",
  width: "100%",
  height: "100vh",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(0, 0, 0, .1)",
});

const modal = css({
  width: "300px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "30px",
  backgroundColor: "white",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px",
  borderRadius: "15px",
  [mq.medium]: {
    width: "500px",
    padding: "50px",
  },
  [mq.large]: {
    width: "700px",
    padding: "100px",
  },
});

const modal_title = css({
  textAlign: "center",
  fontSize: "1.2rem",
  fontFamily: fonts.primary,
  letterSpacing: "1px",
  [mq.medium]: {
    fontSize: "2rem",
  },
  [mq.large]: {
    fontSize: "2.3rem",
  },
});

export {
  container,
  itemTitle,
  itemBid,
  itemStatus,
  itemTown,
  CircleButton,
  icon,
  link,
  modal,
  modal_title,
  bgc,
};
