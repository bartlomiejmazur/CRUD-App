import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { db } from "../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

import { css } from "@emotion/react";
import {
  FormGroup,
  Input,
  Label,
  Select,
  Option,
} from "../../reuseComponent/Form";
import { Container } from "../../reuseComponent/Container";
import { Button } from "../../reuseComponent/Button";
import { Flexbox } from "../../reuseComponent/Flexbox";
import { title, center } from "./AddCampaign.style";

const AddCampaign = () => {
  const dataCollectionRef = collection(db, "campaigns");

  const navigate = useNavigate();

  const [error, setError] = React.useState("");
  const [state, setState] = React.useState({
    name: "",
    keywords: "",
    bid_amount: "",
    fund: "",
    status: 0,
    town: "Warsaw",
    radius: "",
  });

  const updateInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (state.bid_amount < 100) {
      return;
    } else {
      createCampaign();
    }
  };

  const createCampaign = async () => {
    const response = await addDoc(dataCollectionRef, state);
    if (response) {
      navigate("/campaigns/list", { replace: true });
    }
  };

  return (
    <>
      <div css={center}>
        <h3 css={title}>Create new campaign</h3>
        <Container>
          <FormGroup onSubmit={submitForm}>
            <Input
              required={true}
              placeholder="Name campaign"
              id="name"
              name="name"
              value={state.name}
              onChange={updateInput}
            />
            <Input
              placeholder="Keywords"
              id="keywords"
              name="keywords"
              defaultValue={(state.keywords = state.name)}
              onChange={updateInput}
            />
            <Input
              required={true}
              type="number"
              placeholder="Bid amount"
              id="bid_amount"
              name="bid_amount"
              value={state.bid_amount}
              onChange={updateInput}
            />
            {state.bid_amount == 0 ? (
              <p css={{ color: "red" }}>value must be greater than 0</p>
            ) : null}
            <Input
              required={true}
              type="number"
              placeholder="Fund"
              id="fund"
              name="fund"
              value={state.fund}
              onChange={updateInput}
            />
            <Label>Status</Label>
            <Flexbox variant="around">
              <div>
                <input
                  required={true}
                  type="radio"
                  id="status"
                  name="status"
                  value="1"
                  onChange={updateInput}
                />
                <Label htmlFor="on">On</Label>
              </div>
              <div>
                <input
                  required={true}
                  type="radio"
                  id="status"
                  name="status"
                  value="0"
                  onChange={updateInput}
                />
                <Label htmlFor="off">Off</Label>
              </div>
            </Flexbox>
            <Label htmlfor="town">Choose a town:</Label>
            <Select
              id="town"
              name="town"
              onChange={updateInput}
              defaultValue="Warsaw"
            >
              <Option value="Warsaw" id="warsaw">
                Warszawa
              </Option>
              <Option value="Cracow" id="cracow">
                Krak??w
              </Option>
              <Option value="Gdansk" id="gdansk">
                Gda??sk
              </Option>
              <Option value="Poznan" id="poznan">
                Pozna??
              </Option>
              <Option value="Rzeszow" id="rzeszow">
                Rzesz??w
              </Option>
              <Option value="Wroclaw" id="wroclaw">
                Wroc??aw
              </Option>
              <Option value="Katowice" id="katowice">
                Katowice
              </Option>
            </Select>
            <Input
              required={true}
              type="number"
              placeholder="Radius in KM"
              id="radius"
              name="radius"
              value={state.radius}
              onChange={updateInput}
            />
            <Flexbox variant="around">
              <Button variant="green">Create</Button>
              <Link to={`/campaigns/list`}>
                <Button variant="gray" type="submit">
                  Cancel
                </Button>
              </Link>
            </Flexbox>
          </FormGroup>
        </Container>
      </div>
    </>
  );
};

export default AddCampaign;
