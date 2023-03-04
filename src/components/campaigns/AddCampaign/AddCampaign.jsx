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
  return (
    <>
      <h3 css={title}>Create new campaign</h3>
      <Container>
        <FormGroup>
          <Input placeholder="Name campaign" />
          <Input placeholder="Keywords" />
          <Input type="number" placeholder="Bid amount" />
          <Input type="number" placeholder="Fund" />
          <Label>Status</Label>
          <Flexbox variant="around">
            <div>
              <input type="radio" id="on" name="status" />
              <Label htmlFor="on">On</Label>
            </div>
            <div>
              <input type="radio" id="off" name="status" />
              <Label htmlFor="off">Off</Label>
            </div>
          </Flexbox>
          <Label htmlfor="town">Choose a town:</Label>
          <Select id="town" name="town">
            <Option value="warsaw">Warszawa</Option>
            <Option value="cracow">Kraków</Option>
            <Option value="gdansk">Gdańsk</Option>
            <Option value="poznan">Poznań</Option>
            <Option value="rzeszow">Rzeszów</Option>
            <Option value="wroclaw">Wrocław</Option>
            <Option value="katowice">Katowice</Option>
          </Select>
          <Input type="number" placeholder="Radius in KM" />
          <Flexbox variant="around">
            <Button variant="green">Crate</Button>
            <Link to={`/campaigns/list`}>
              <Button variant="gray">Cancel</Button>
            </Link>
          </Flexbox>
        </FormGroup>
      </Container>
    </>
  );
};

export default AddCampaign;
