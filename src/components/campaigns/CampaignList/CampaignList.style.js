import styled from "@emotion/styled";
import { css } from "@emotion/react";

import * as colors from "../../../style/colors";
import * as fonts from "../../../style/fonts";
import * as mq from "../../../style/media-queries";

const title = css({
  fontSize: "1rem",
  fontFamily: fonts.primary,
  letterSpacing: "1px",
  padding: "0 10px",
  [mq.small]: {
    fontSize: "1.6rem",
  },
});

const empty = css({
  marginTop: "10px",
  textAlign: "center",
  fontFamily: fonts.primary,
  fontSize: "1.4rem",
  [mq.medium]: {
    fontSize: "2.2rem",
  },
  [mq.large]: {
    fontSize: "2.5rem",
  },
});

const item = css({
  [mq.large]: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

const add_section = css({
  [mq.medium]: {
    justifyContent: "flex-end",
  },
  [mq.large]: {
    justifyContent: "flex-end",
  },
});

const search_title = css({
  textAlign: "center",
  [mq.small]: {
    fontSize: "1.5rem",
  },
  [mq.medium]: {
    textAlign: "left",
    fontSize: "1.8rem",
  },
  [mq.large]: {
    textAlign: "left",
    fontSize: "1.8rem",
  },
});

const spinner = css({
  marginTop: "20px",
  width: "100%",
  fontSize: "2rem",
});

export { title, spinner, search_title, add_section, item, empty };
