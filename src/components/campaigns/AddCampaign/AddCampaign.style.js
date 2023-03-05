import styled from "@emotion/styled";
import { css } from "@emotion/react";

import * as fonts from "../../../style/fonts";
import * as colors from "../../../style/colors";
import * as mq from "../../../style/media-queries";

const title = css({
  color: "green",
  fontFamily: fonts.primary,
  textAlign: "center",
  fontSize: "1.5rem",
  letterSpacing: "1px",
  [mq.medium]: {
    fontSize: "2.7rem",
  },
  [mq.large]: {
    fontSize: "2.7rem",
  },
});

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

export { title, center };
