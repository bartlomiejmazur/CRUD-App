import React from "react";
import { Link } from "react-router-dom";

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
import { title } from "./AddCampaign.style";

const AddCampaign = () => {
  const [state, setState] = React.useState({
    name: "",
    keywords: "",
    bid_amount: "",
    fund: "",
    status: 0,
    town: "",
    radius: "",
  });

  const updateInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h3 css={title}>Create new campaign</h3>
      <Container>
        <FormGroup>
          <Input
            required={true}
            placeholder="Name campaign"
            id="name"
            name="name"
            value={state.name}
            onChange={updateInput}
          />
          <Input
            required={true}
            placeholder="Keywords"
            id="keywords"
            name="keywords"
            value={state.keywords}
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
          <Select id="town" name="town" onChange={updateInput} required={true}>
            <Option value="Warsaw" id="warsaw">
              Warszawa
            </Option>
            <Option value="Cracow" id="cracow">
              Kraków
            </Option>
            <Option value="Gdansk" id="gdansk">
              Gdańsk
            </Option>
            <Option value="Poznan" id="poznan">
              Poznań
            </Option>
            <Option value="Rzeszow" id="rzeszow">
              Rzeszów
            </Option>
            <Option value="Wroclaw" id="wroclaw">
              Wrocław
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
            <Button variant="green">Crate</Button>
            <Link to={`/campaigns/list`}>
              <Button variant="gray" type="submit">
                Cancel
              </Button>
            </Link>
          </Flexbox>
        </FormGroup>
      </Container>
    </>
  );
};

export default AddCampaign;
