import React from "react";

import {
  container,
  itemBid,
  itemStatus,
  itemTown,
  itemTitle,
  CircleButton,
} from "./CampaignItem.style";

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const CampaignItem = ({ data }) => {
  return data.map((el) => {
    return (
      <div css={container} key={el.id}>
        <div css={itemTitle}>{el.name}</div>
        <div css={itemBid}>Bid amout: {el.bid_amount}</div>
        <div css={itemStatus}>Status: {el.status ? "On" : "Off"}</div>
        <div css={itemTown}>Town: {el.town}</div>

        <CircleButton variant="view">
          <Link to={`/campaigns/view/${el.id}`}>
            <FaEye css={{ color: "white" }} />
          </Link>
        </CircleButton>
        <CircleButton variant="edit">
          <Link to={`/campaigns/edit/:campaignId`}>
            <FaEdit css={{ color: "white" }} />
          </Link>
        </CircleButton>
        <CircleButton variant="delete">
          <FaTrash css={{ color: "white" }} />
        </CircleButton>
      </div>
    );
  });
};

export default CampaignItem;
