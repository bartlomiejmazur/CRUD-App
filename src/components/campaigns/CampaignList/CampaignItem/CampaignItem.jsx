import React from "react";

import { Button } from "../../../reuseComponent/Button";
import { Flexbox } from "../../../reuseComponent/Flexbox";

import {
  container,
  itemBid,
  itemStatus,
  itemTown,
  itemTitle,
  CircleButton,
  icon,
  link,
  modal,
  modal_title,
  bgc,
} from "./CampaignItem.style";

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const CampaignItem = ({ deleteItem, filterData }) => {
  const [showModal, setShowModal] = React.useState({
    id: "",
    name: "",
    modal: false,
  });

  return filterData.map((el) => {
    return (
      <div css={container} key={el.id}>
        <div css={itemTitle}>{el.name}</div>
        <div css={itemBid}>Campaign fund: {el.fund}</div>
        <div css={itemStatus}>Status: {el.status > 0 ? "On" : "Off"}</div>
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
        <CircleButton
          variant="delete"
          onClick={() =>
            setShowModal({ id: el.id, name: el.name, modal: true })
          }
        >
          <FaTrash css={icon} />
        </CircleButton>
        {showModal.modal ? (
          <div css={bgc}>
            <div css={modal}>
              <h5 css={modal_title}>
                Are you sure to delete Campaign {showModal.name}
              </h5>
              <Flexbox variant="around">
                <Button
                  variant="danger"
                  onClick={() => deleteItem(showModal.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="gray"
                  onClick={() => setShowModal({ modal: false })}
                >
                  close
                </Button>
              </Flexbox>
            </div>
          </div>
        ) : null}
      </div>
    );
  });
};

export default CampaignItem;
