import styled from "@emotion/styled";
import { css } from "@emotion/react";
import * as colors from "../../../../style/colors";
import * as fonts from "../../../../style/fonts";

const container = css({
  width: "100%",
  margin: "5px auto",
  padding: "20px",
  display: "grid",
  fontFamily: fonts.secondary,
  backgroundColor: "#fff",
  fontSize: ".6rem",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  columnGap: "5px",
  rowGap: "5px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  border: "1px solid #ddd",
  borderRadius: "10px",
});

const itemTitle = css({
  fontFamily: fonts.primary,
  fontSize: ".9rem",
  gridColumn: "1/-1",
  gridRow: 1,
  margin: "0 auto",
});

const itemBid = css({
  padding: "5px",
  gridColumn: "1/-1",
  gridRow: 2,
  borderBottom: `1px solid ${colors.gray80}`,
});

const itemStatus = css({
  padding: "5px",
  gridColumn: "1/-1",
  gridRow: 3,
  borderBottom: `1px solid ${colors.gray80}`,
});

const itemTown = css({
  padding: "5px",
  gridColumn: "1/-1",
  gridRow: 4,
  borderBottom: `1px solid ${colors.gray80}`,
});

const buttonsVariant = {
  view: {
    color: colors.base,
    backgroundColor: colors.orange,
    gridColumn: "1 / 2",
    gridRow: 5,
  },
  edit: {
    color: colors.base,
    backgroundColor: colors.indigo,
    gridColumn: "3 / 4",
    gridRow: 5,
  },
  delete: {
    color: colors.base,
    backgroundColor: colors.danger,
    gridColumn: "5 / 6",
    gridRow: 5,
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
  },
  ({ variant = "" }) => buttonsVariant[variant]
);

export { container, itemTitle, itemBid, itemStatus, itemTown, CircleButton };
