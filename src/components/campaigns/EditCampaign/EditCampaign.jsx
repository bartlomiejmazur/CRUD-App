import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

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
import { title, center } from "./EditCampaign.style";

const EditCampaign = () => {
  const { campaignId } = useParams();

  const navigate = useNavigate();

  const [item, setItem] = React.useState({
    name: "",
    keywords: "",
    bid_amount: "",
    fund: "",
    status: 0,
    town: "",
    radius: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const docRef = doc(db, "campaigns", campaignId);

  React.useEffect(() => {
    const getItem = async () => {
      try {
        setLoading(true);
        const itemDb = await getDoc(docRef);
        setItem(itemDb.data());
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    getItem();
  }, [campaignId]);

  const updateInput = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    updateCampaign();
  };

  const updateCampaign = async () => {
    try {
      const response = await updateDoc(docRef, item);
      navigate("/campaigns/list", { replace: true });
    } catch (error) {
      await setError(error);
      navigate(`/campaigns/edit/${campaignId}`, { replace: false });
    }
  };

  return (
    <div css={center}>
      <h3 css={title}>Edit campaign</h3>
      <Container>
        <FormGroup onSubmit={submitForm}>
          <Input
            required={true}
            placeholder="Name campaign"
            name="name"
            id="name"
            value={item.name}
            onChange={updateInput}
          />
          <Input
            required={true}
            placeholder="Keywords"
            name="keywords"
            id="keywords"
            value={item.keywords}
            onChange={updateInput}
          />
          <Input
            required={true}
            type="number"
            placeholder="Bid amount"
            name="bid_amount"
            id="bid_amount"
            value={item.bid_amount}
            onChange={updateInput}
          />
          <Input
            required={true}
            type="number"
            placeholder="Fund"
            name="fund"
            id="fund"
            value={item.fund}
            onChange={updateInput}
          />
          <Label>Status</Label>
          <Flexbox variant="around">
            <div>
              <input
                required={true}
                type="radio"
                name="status"
                id="status"
                value="1"
                onChange={updateInput}
              />
              <Label htmlFor="on">On</Label>
            </div>
            <div>
              <input
                required={true}
                type="radio"
                name="status"
                id="status"
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
            value={item.town}
            onChange={updateInput}
          >
            <Option value="warsaw">Warszawa</Option>
            <Option value="cracow">Kraków</Option>
            <Option value="gdansk">Gdańsk</Option>
            <Option value="poznan">Poznań</Option>
            <Option value="rzeszow">Rzeszów</Option>
            <Option value="wroclaw">Wrocław</Option>
            <Option value="katowice">Katowice</Option>
          </Select>
          <Input
            required={true}
            type="number"
            placeholder="Radius in KM"
            name="radius"
            id="radius"
            value={item.radius}
            onChange={updateInput}
          />
          <Flexbox variant="around">
            <Button>Update</Button>
            <Link to={`/campaigns/list`}>
              <Button variant="gray">Cancel</Button>
            </Link>
          </Flexbox>
        </FormGroup>
      </Container>
    </div>
  );
};

export default EditCampaign;
