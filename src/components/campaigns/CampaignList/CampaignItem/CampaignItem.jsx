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

const CampaignItem = () => {
  return (
    <div css={container}>
      <div css={itemTitle}>Title</div>
      <div css={itemBid}>Bid amout:</div>
      <div css={itemStatus}>Status:</div>
      <div css={itemTown}>Town:</div>
      <CircleButton variant="view">
        <i className="fa-solid fa-eye"></i>
      </CircleButton>
      <CircleButton variant="edit">
        <i className="fa-solid fa-pen-to-square"></i>
      </CircleButton>
      <CircleButton variant="delete">
        <i className="fa-solid fa-trash"></i>
      </CircleButton>
    </div>
  );
};

export default CampaignItem;
