import React from "react";
import { Link } from "react-router-dom";

import CampaignItem from "./CampaignItem/CampaignItem";

import { css } from "@emotion/react";
import { Button } from "../../reuseComponent/Button";
import { Input, FormGroup } from "../../reuseComponent/Form";
import { Container } from "../../reuseComponent/Container";
import { Flexbox } from "../../reuseComponent/Flexbox";
import { title } from "./CampaignList.style";

const CampaignList = () => {
  return (
    <>
      <Container>
        <Flexbox>
          <h3 css={title}>Campaign Manager</h3>
          <Button variant="green">
            <Link
              css={{ textDecoration: "none", color: "white" }}
              to={`/campaigns/add`}
            >
              New <i className="fa-solid fa-plus"></i>
            </Link>
          </Button>
        </Flexbox>
      </Container>

      <Container>
        <FormGroup>
          <h3>
            <i css={{ padding: "10px" }} className="fa-solid fa-list"></i>Search
            Campaign
          </h3>
          <Input placeholder="Enter campaing name..." />
          <Button>
            Search <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
        </FormGroup>

        <CampaignItem />
      </Container>
    </>
  );
};

export default CampaignList;
