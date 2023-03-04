import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Flexbox = styled.div(
  {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ({ variant = "" }) => flexboxVariant[variant]
);

const flexboxVariant = {
  column: {
    flexDirection: "column",
  },
  around: {
    justifyContent: "space-around",
  },
  betven: {
    justifyContent: "space-betven",
  },
  evenly: {
    justifyContent: "space-evenly",
  },
};

export { Flexbox };
