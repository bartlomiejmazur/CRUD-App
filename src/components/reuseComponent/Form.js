import styled from "@emotion/styled";
import { css } from "@emotion/react";

import * as fonts from "../../style/fonts";
import * as mq from "../../style/media-queries";

// const Input = styled.input({
//     margin: "10px 0",
//     borderRadius: "3px",
//     border: "1px solid #f1f1f4",
//     background: "#fff",
//     padding: "8px 12px",
//   });
const FormGroup = styled.form({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  [mq.medium]: {
    margin: "0 auto",
    width: "500px",
  },
  [mq.large]: {
    margin: "0 auto",
    width: "500px",
  },
});

const Input = styled.input({
  width: "100%",
  fontFamily: fonts.secondary,
  margin: "5px 0",
  borderRadius: "3px",
  border: "1px solid #f1f1f4",
  background: "#fff",
  padding: "8px 12px",
  [mq.small]: {
    margin: "10px 0",
    height: "50px",
    fontSize: "1.2rem",
  },
  [mq.medium]: {
    margin: "10px 0",
    height: "40px",
    fontSize: "1.5rem",
  },
  [mq.large]: {
    margin: "10px 0",
    fontSize: "1.5rem",
  },
});

const Label = styled.label({
  fontFamily: fonts.primary,
  padding: "0 5px",
  [mq.medium]: {
    fontSize: "1.5rem",
  },
});

const Select = styled.select({
  border: "none",
  padding: "5px",
  cursor: "pointer",
  [mq.medium]: {
    marginTop: "20px",
    fontSize: "1.5rem",
  },
  [mq.large]: {
    marginTop: "20px",
    fontSize: "1.3rem",
  },
});

const Option = styled.option({
  fontFamily: fonts.secondary,
  padding: "10px",
  cursor: "pointer",
});

export { FormGroup, Input, Label, Select, Option };
