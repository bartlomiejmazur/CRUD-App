import styled from "@emotion/styled";
import { css } from "@emotion/react";

import * as fonts from "../../style/fonts";

// const Input = styled.input({
//     margin: "10px 0",
//     borderRadius: "3px",
//     border: "1px solid #f1f1f4",
//     background: "#fff",
//     padding: "8px 12px",
//   });
const FormGroup = styled.div({
  display: "flex",
  flexDirection: "column",
});

const Input = styled.input({
  fontFamily: fonts.secondary,
  margin: "5px 0",
  borderRadius: "3px",
  border: "1px solid #f1f1f4",
  background: "#fff",
  padding: "8px 12px",
});

const Label = styled.label({
  fontFamily: fonts.primary,
  padding: "0 5px",
});

const Select = styled.select({
  border: "none",
  padding: "5px",
  cursor: "pointer",
});

const Option = styled.option({
  fontFamily: fonts.secondary,
  padding: "10px",
  cursor: "pointer",
});

export { FormGroup, Input, Label, Select, Option };
