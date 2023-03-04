import React from "react";

import { css } from "@emotion/react";
import { Container } from "../../reuseComponent/Container";
import { Grid, Item, title } from "./ViewCampaign.style";
import { Button } from "../../reuseComponent/Button";
import { Link } from "react-router-dom";

const ViewCampaign = () => {
  return (
    <>
      <h2 css={title}>View Campaign</h2>
      <Container variant="border">
        <Grid>
          <Item variant="name">Name:</Item>
          <Item variant="keyword">Keywords:</Item>
          <Item variant="bid">Bid:</Item>
          <Item variant="fund">Fund:</Item>
          <Item variant="status">Status:</Item>
          <Item variant="town">Town:</Item>
          <Item variant="radius">Radius:</Item>
        </Grid>

        <Link to={`/campaigns/list`}>
          <Button variant="orange">
            <i css={{ margin: "0 5px" }} className="fa-solid fa-arrow-left"></i>
            Back
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default ViewCampaign;
