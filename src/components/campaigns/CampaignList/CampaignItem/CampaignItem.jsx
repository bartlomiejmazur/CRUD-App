import React from "react";

import {
  container,
  itemBid,
  itemStatus,
  itemTown,
  itemTitle,
  CircleButton,
} from "./CampaignItem.style";

import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const CampaignItem = () => {
  return (
    <div css={container}>
      <div css={itemTitle}>Title</div>
      <div css={itemBid}>Bid amout:</div>
      <div css={itemStatus}>Status:</div>
      <div css={itemTown}>Town:</div>
      <CircleButton variant="view">
        <Link to={`/campaigns/view/:campaignId`}>
          <i css={{ color: "white" }} className="fa-solid fa-eye"></i>
        </Link>
      </CircleButton>
      <CircleButton variant="edit">
        <Link to={`/campaigns/edit/:campaignId`}>
          <i css={{ color: "white" }} className="fa-solid fa-pen-to-square"></i>
        </Link>
      </CircleButton>
      <CircleButton variant="delete">
        <i className="fa-solid fa-trash"></i>
      </CircleButton>
    </div>
  );
};

export default CampaignItem;
