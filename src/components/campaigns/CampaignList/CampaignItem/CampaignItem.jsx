import React from "react";

import {
  container,
  itemBid,
  itemStatus,
  itemTown,
  itemTitle,
  CircleButton,
  icon,
  link,
} from "./CampaignItem.style";

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const CampaignItem = ({ deleteItem, filterData }) => {
  return filterData.map((el) => {
    return (
      <div css={container} key={el.id}>
        <div css={itemTitle}>{el.name}</div>
        <div css={itemBid}>Bid amout: {el.bid_amount}</div>
        <div css={itemStatus}>Status: {el.status ? "On" : "Off"}</div>
        <div css={itemTown}>Town: {el.town}</div>

        <CircleButton variant="view">
          <Link css={link} to={`/campaigns/view/${el.id}`}>
            <FaEye css={icon} />
          </Link>
        </CircleButton>
        <CircleButton variant="edit">
          <Link css={link} to={`/campaigns/edit/${el.id}`}>
            <FaEdit css={icon} />
          </Link>
        </CircleButton>
        <CircleButton variant="delete" onClick={() => deleteItem(el.id)}>
          <FaTrash css={icon} />
        </CircleButton>
      </div>
    );
  });
};

export default CampaignItem;
