import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Container = styled.section(
  {
    width: "90%",
    margin: "0 auto",
    padding: "10px",
  },
  ({ variant = "" }) => containerVairant[variant]
);

const containerVairant = {
  border: {
    backgroundColor: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },
};

export { Container };
