import React from "react";

import CampaignItem from "./CampaignItem/CampaignItem";

import { css } from "@emotion/react";
import {
  flex,
  Button,
  Input,
  FormGroup,
  Container,
  titleSecondary,
  titlePrimary,
} from "./CampaignList.style";

const CampaignList = () => {
  return (
    <>
      <Container variant="border">
        <div css={flex}>
          <h3 css={titleSecondary}>Campaign Manager</h3>
          <Button variant="green">
            New <i className="fa-solid fa-plus"></i>
          </Button>
        </div>
      </Container>

      <Container>
        <FormGroup>
          <h3 css={titlePrimary}>
            <i css={{ padding: "10px" }} className="fa-solid fa-list"></i>Search
            Campaign
          </h3>
          <Input placeholder="Enter campaing name..." />
          <Button>
            Search <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
        </FormGroup>

        <h4 css={titlePrimary}>List of item</h4>
        <CampaignItem />
      </Container>
    </>
  );
};

export default CampaignList;
