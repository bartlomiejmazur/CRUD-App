import styled from "@emotion/styled";
import { css } from "@emotion/react";
import * as mq from "../../style/media-queries";

const Container = styled.section(
  {
    width: "90%",
    margin: "0 auto",
    padding: "10px",
    flexWrap: "wrap",
  },
  ({ variant = "" }) => containerVairant[variant]
);

const containerVairant = {
  border: {
    backgroundColor: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    [mq.large]: {
      width: "500px",
    },
  },
};

export { Container };
